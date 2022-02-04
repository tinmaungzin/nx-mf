import { useContext, useState } from "react";
import { DataContext } from "contexts/DataContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Header from "components/customerInfo/Header";
import CloseIcon from "components/icons/close";
import DropdownIndicator from "components/base/DropdownIndicator";
import AccordionInputGroup from "components/base/AccordionInputGroup";
import Collapse from "components/base/Collapse";
import DropdownAccordion from "components/base/DropdownAccordion";
import SliderModal from "components/base/SliderModal";
import TextLink from "components/base/TextLink";
import AddIcon from "components/icons/dashboard/add";
import TrashIcon from "components/icons/dashboard/trash";

const CoverageLayout = ({ setPage, children, coverageValue }) => {
  const { register, handleSubmit } = useForm();
  const { data, setData } = useContext(DataContext);

  const onSubmit = (formData) => console.log(formData);

  return (
    <main className='container'>
      <Header>
        <DropdownIndicator
          label='Total Coverage'
          value={coverageValue ? coverageValue : ' -----'}
        ></DropdownIndicator>
        <Link to='/admin/customer/1'>
          <CloseIcon />
        </Link>
      </Header>
      <section className='d-flex justify-content-between mt-3'>
        <div>
          <form id='coverage-form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='fs-3 fw-bold'>
              Let us understand your Existing Coverage
            </h1>
            {children}
          </form>
        </div>
        <div>
          <img src={require('assets/img/coverage-1.svg').default} alt='' />
        </div>
      </section>

      <SliderModal>
        {/* AIA Guaranteed Protection Plus (III) */}
        <DropdownAccordion
          id='protectionPlus'
          header='AIA Guaranteed Protection Plus (III)'
          color='grey-2'
        >
          {/* Policy Info */}
          <Collapse
            trigger={<AccordionInputGroup label='Policy Info' name='header' />}
            id='policyInfo'
          >
            <AccordionInputGroup
              label='Life Assured'
              value='customer'
              name=''
              type='coverage'
              valueType='text'
            />
            <AccordionInputGroup
              valueType='text'
              label='Policy Type'
              value={data.coverage.policyType}
              name='policyType'
              type='coverage'
            />
            <AccordionInputGroup
              valueType='text'
              label='Policy Period'
              value={data.coverage.policyPeriod}
              name='policyPeriod'
              type='coverage'
            />
            <AccordionInputGroup
              valueType='text'
              label='Policy Name'
              value={data.coverage.policyName}
              name='policyName'
              type='coverage'
            />
            <AccordionInputGroup
              valueType='text'
              label='Insurer'
              value={data.coverage.insurer}
              name='insurer'
              type='coverage'
            />
            <AccordionInputGroup
              valueType='text'
              label='Issued Year'
              value={data.coverage.issuedYear}
              name='issuedYear'
              type='coverage'
            />
            <AccordionInputGroup
              valueType='date'
              label='Maturity Year'
              value={data.coverage.maturityYear}
              name='maturityYear'
              type='coverage'
            />
          </Collapse>
          {/* Policy Benefits */}
          <Collapse
            trigger={
              <AccordionInputGroup
                valueType='text'
                label='Policy Benefits'
                name='header'
                type='coverage'
              />
            }
            id='policyBenefits'
          >
            <AccordionInputGroup
              valueType='text'
              label='Critical Illness'
              value={data.coverage.policyBenefitName}
              name='policyBenefitName'
              type='coverage'
            />
            <TextLink className='mt-3' icon={<AddIcon />}>
              Add Policy Benefits
            </TextLink>
          </Collapse>
          {/* Premium Info */}
          <Collapse
            trigger={
              <AccordionInputGroup
                valueType='text'
                label='Premium Info'
                name='header'
                type='coverage'
              />
            }
            id='premiumInfo'
          >
            <AccordionInputGroup
              valueType='number'
              label='Premium Amount'
              value={data.coverage.premiumAmount}
              name='premiumAmount'
              type='coverage'
            />
            <AccordionInputGroup
              valueType='text'
              label='Payment Type'
              value={data.coverage.paymentType}
              name='paymentType'
              type='coverage'
            />
            <AccordionInputGroup
              valueType='text'
              label='Premium Term'
              value={data.coverage.premiumTerm}
              name='premiumTerm'
              type='coverage'
            />
            <TextLink className='mt-3' icon={<TrashIcon />}>
              Delete This Policy
            </TextLink>
          </Collapse>
        </DropdownAccordion>

        {/* AIA Smart Flexi Growth */}
        <DropdownAccordion
          id='flexiGrowth'
          header='AIA Smart Flexi Growth'
          color='links'
        >
          {/* content */}
        </DropdownAccordion>
      </SliderModal>
    </main>
  );
};

export default CoverageLayout;
