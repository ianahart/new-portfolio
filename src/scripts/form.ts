export interface Form {
  name: string;
  email: string;
  message: string;
}

export const createObserver = (target: HTMLElement) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';

        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(target as HTMLElement);
};

const constructErrors = ({ name, email, message }: Form) => {
  const errors = {
    name: {
      validator: name.trim().length === 0 || name.length > 200,
      msg: 'Your name must be between 1 and 200 characters',
    },
    email: {
      validator: email.trim().length === 0,
      msg: 'Please provide an email address',
    },
    message: {
      validator: message.trim().length === 0 || message.length > 400,
      msg: 'Your message must be betweeen 1 and 400 characters',
    },
  };
  return errors;
};

const getFormElements = () => {
  const [nameEl, emailEl, messageEl] = ['name', 'email', 'message'].map(
    (el) => document.getElementById(el) as HTMLElement
  );
  return { nameEl, emailEl, messageEl };
};

const validateForm = (data: Form) => {
  const { name, email, message } = constructErrors(data);
  const { nameEl, emailEl, messageEl } = getFormElements();

  nameEl.nextElementSibling!.textContent = name.validator ? name.msg : '';
  emailEl.nextElementSibling!.textContent = email.validator ? email.msg : '';
  messageEl.nextElementSibling!.textContent = message.validator ? message.msg : '';

  return [name, email, message].some((v) => v.validator);
};

export const handleFormSubmit = (form: HTMLFormElement) => {
  const submitForm = (e: SubmitEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const dataObject = Object.fromEntries(data.entries()) as unknown;

    if (validateForm(dataObject as Form)) {
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => {
        throw new Error(error);
      });
  };

  form?.addEventListener('submit', submitForm);
};
