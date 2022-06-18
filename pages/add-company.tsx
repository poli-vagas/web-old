import { getAuth } from "firebase/auth";
import { useState } from "react";
import AccessDeniedCard from "../components/AccessDeniedCard";
import Button from "../components/Button";
import LoadingSpin from "../components/LoadingSpin";
import { addCompany, CompanyInput } from "../services/company";

type StatusType = 'pending' | 'loading' | 'success' | 'failed';

const AddCompany = () => {
  const [name, setName] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [error, setError] = useState<string|null>(null);
  const [status, setStatus] = useState<StatusType>('pending');

  const isLoading = status === 'loading';

  const changeName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }

  const changeWebsite = (e: React.FormEvent<HTMLInputElement>) => {
    setWebsite(e.currentTarget.value);
  }

  var user = getAuth().currentUser;
  if (user === null) {
    return <AccessDeniedCard/>
  }

  const registerCompany = () => {
    setStatus('loading');
    setError(null);

    if (name.length === 0) {
      setError('Nome da empresa é obrigatório.');
      setStatus('failed');

      return;
    }

    const company: CompanyInput = { name, website };

    addCompany(company)
      .then(() => { setStatus('success'); })
      .catch((errorMessage) => {
        setStatus('failed');
        setError(errorMessage)
      });
  }

  return (
    <div className="w-full max-w-xs mx-auto mt-5">
      <form className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
          Nome da empresa
        </label>
        <input
          id="name"
          value={name}
          onChange={changeName}
          placeholder="Acme Inc."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          required
        />
        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="website">
          Website
        </label>
        <input
          id="website"
          value={website}
          onChange={changeWebsite}
          placeholder="https://example.com"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none"
        />
        <div className="flex justify-center">
          { !isLoading &&
            <Button onClick={registerCompany}>Registrar</Button>
          }
          { isLoading && <LoadingSpin/> }
        </div>
        <p className="text-red-500 text-xs my-1">{ error }</p>
        {
          status === 'success' &&
          <p className="text-green-500 text-xs my-1">Empresa registrada.</p>
        }
      </form>
    </div>
  )
};

export default AddCompany;
