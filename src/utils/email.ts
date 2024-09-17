import { FormData as ContactFormData } from '@/app/contact-us/page';
import { FormData as AdmissionsFormData } from '@/app/admissions-consulting/_components/Contact';

export function sendEmail(data: ContactFormData | AdmissionsFormData) {
  const apiEndpoint = '/api/email';

  const currentPage = window.location.pathname;

  let formDataToSend;

  if (currentPage === '/contact-us') {
    formDataToSend = {
      name: (data as ContactFormData).name,
      email: (data as ContactFormData).email,
      message: (data as ContactFormData).message,
    };
  } else if (currentPage === '/admissions-consulting') {
    formDataToSend = {
      fullName: (data as AdmissionsFormData).name,
      email: (data as AdmissionsFormData).email,
      university: (data as AdmissionsFormData).program,
    };
  }

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formDataToSend),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
