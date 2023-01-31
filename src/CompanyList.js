import React, {useEffect, useState} from 'react';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const req = await JoblyApi.getAllCompanies();
      setCompanies(req);
    }
    getCompanies();
  }, []);

  const updateCompanies = (filteredCompanies) => {
    setCompanies([...filteredCompanies]);
  }

  return (
    <>
      <SearchForm updateCompanies={updateCompanies}/>
      <div>
        {companies.map(company => (
          <div>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CompanyList;