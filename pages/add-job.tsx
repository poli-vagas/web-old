import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";
import { getAuth } from "firebase/auth";
import AccessDeniedCard from "../components/AccessDeniedCard";
import Button from "../components/Button";
import LoadingSpin from "../components/LoadingSpin";
import { CompanyData, fetchCompanies } from "../services/company";
import { addJob } from "../services/job";

type StatusType = 'pending' | 'loading' | 'success' | 'failed';

const AddJob = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [companyId, setCompanyId] = useState<string|null>(null);
  const [type, setType] = useState<string|null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [courses, setCourses] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [linkedin, setLinkedin] = useState<string>('');
  const [hoursPerWeek, setHoursPerWeek] = useState<number|null>(null);
  const [salary, setSalary] = useState<string>('');
  const [workspace, setWorkspace] = useState<string|null>(null);

  const [error, setError] = useState<string|null>(null);
  const [status, setStatus] = useState<StatusType>('pending');

  const [companies, setCompanies] = useState<CompanyData[]>([]);

  useEffect(() => {
    fetchCompanies().then(c => { setCompanies(c); });
  }, []);

  var user = getAuth().currentUser;
  if (user === null) {
    return <AccessDeniedCard/>
  }

  const availableTypes = ['Iniciação Científica', 'Estágio', 'Trainee', 'Emprego'];

  const availableCourses = [
    'Engenharia Ambiental',
    'Engenharia Civil',
    'Engenharia de Computação e Informação',
    'Engenharia de Controle e Automação',
    'Engenharia Elétrica',
    'Engenharia Eletrônica e de Computação',
    'Engenharia de Materiais',
    'Engenharia Mecânica',
    'Engenharia Metalúrgica',
    'Engenharia Naval e Oceânica',
    'Engenharia Nuclear',
    'Engenharia de Petróleo',
    'Engenharia de Produção',
  ];

  const availableHoursPerWeek = [10, 15, 20, 25, 30, 40];

  const availableWorkspaces = ['Presencial', 'Remoto', 'Híbrido'];

  const isLoading = status === 'loading';

  const registerCompany = () => {
    setStatus('loading');
    setError(null);

    if (companyId === null) {
      setError('Empresa é obrigatória.');
      setStatus('failed');
      return;
    }

    if (title.length === 0) {
      setError('Título é obrigatório.');
      setStatus('failed');
      return;
    }

    if (description.length === 0) {
      setError('Descrição é obrigatória.');
      setStatus('failed');
      return;
    }

    if (type === null) {
      setError('Tipo é obrigatório.');
      setStatus('failed');
      return;
    }

    const parsedSalary = parseFloat(
      salary.replace(',', 'x').replace('.', ',').replace('x', '.') ?? '0'
    ) * 100;

    const job = {
      title,
      description,
      companyId,
      type,
      courses,
      tags,
      contact: { email, url, linkedin },
      hoursPerWeek,
      salary: parsedSalary,
      workspace,
    };
    addJob(job)
      .then(() => { setStatus('success'); })
      .catch((errorMessage) => {
        setStatus('failed');
        setError(errorMessage)
      });
  }

  return (
    <div className="md:mx-10 md:mt-5">
      <form className="bg-white shadow-md rounded-lg px-8 py-6">
        <div className="md:flex md:gap-5">
          <div className="md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="company">
              Empresa
            </label>
            <Select
              options={companies.map(c => ({ value: c.id, label: c.name }))}
              placeholder="Selecione..."
              onChange={(e) => { setCompanyId(e?.value ?? null) }}
              className="mb-3"
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="type">
              Tipo
            </label>
            <Select
              options={availableTypes.map(t => ({ value: t, label: t }))}
              placeholder="Selecione..."
              onChange={(e) => { setType(e?.value ?? null) }}
              className="mb-3"
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">
              Título
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => { setTitle(e.currentTarget.value) }}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none"
              required
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
              Descrição
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => { setDescription(e.currentTarget.value) }}
              placeholder=""
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none"
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="courses">
              Cursos
            </label>
            <Select
              id="courses"
              isMulti
              options={availableCourses.map(c => ({ value: c, label: c }))}
              placeholder="Selecione..."
              onChange={(e) => {setCourses(e.map(o => o.value))}}
              className="mb-3"
            />
          </div>
          <div className="md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
              Email de contato para a vaga (opcional)
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.currentTarget.value) }}
              placeholder="rh@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none"
              required
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="url">
              Link da vaga (opcional)
            </label>
            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => { setUrl(e.currentTarget.value) }}
              placeholder="https://example.com/vagas/123"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none"
              required
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="linkedin">
              Link da vaga - Linkedin (opcional)
            </label>
            <input
              id="linkedin"
              type="url"
              value={linkedin}
              onChange={(e) => { setLinkedin(e.currentTarget.value) }}
              placeholder="https://www.linkedin.com/jobs/view/123456"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none"
              required
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="hoursPerWeek">
              Carga horária (opcional)
            </label>
            <Select
              options={availableHoursPerWeek.map(h => ({ value: h, label: `${h}h` }))}
              placeholder="Selecione..."
              onChange={(e) => { setHoursPerWeek(e?.value ?? null) }}
              className="mb-3"
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="salary">
              Salário/Bolsa (opcional)
            </label>
            <CurrencyInput
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none"
              id="salary"
              placeholder="R$ 0,00"
              prefix="R$ "
              decimalSeparator=","
              groupSeparator="."
              value={salary}
              decimalsLimit={2}
              onValueChange={(value) => { setSalary(value ?? '') }}
            />

            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="hoursPerWeek">
              Local de trabalho (opcional)
            </label>
            <Select
              options={availableWorkspaces.map(w => ({ value: w, label: w }))}
              placeholder="Selecione..."
              onChange={(e) => { setWorkspace(e?.value ?? null) }}
              className="mb-3"
            />
          </div>
        </div>

        <div className="flex justify-center mt-2">
          { !isLoading &&
            <Button onClick={registerCompany}>Registrar</Button>
          }
          { isLoading && <LoadingSpin/> }
        </div>
        <p className="text-red-500 text-sm my-1 text-center">{ error }</p>
        {
          status === 'success' &&
          <p className="text-green-500 text-sm my-1 text-center">Vaga registrada.</p>
        }
      </form>
    </div>
  )
};

export default AddJob;
