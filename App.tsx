import { useState } from 'react';
import MainPage from './components/MainPage';
import DisplayPage from './components/DisplayPage';
import { PayrollData } from './types/payroll';

function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'display'>('main');
  const [payrollData, setPayrollData] = useState<PayrollData | null>(null);

  const handleCalculate = (data: PayrollData) => {
    setPayrollData(data);
    setCurrentPage('display');
  };

  const handleBack = () => {
    setCurrentPage('main');
  };

  return (
    <>
      {currentPage === 'main' && <MainPage onCalculate={handleCalculate} />}
      {currentPage === 'display' && payrollData && (
        <DisplayPage data={payrollData} onBack={handleBack} />
      )}
    </>
  );
}

export default App;
