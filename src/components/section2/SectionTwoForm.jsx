import React from 'react';
import './SectionTwoForm.css';
import Button from '../Button/Button';

function SectionTwoForm() {
  return (
    <section className="section-two-form-container">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="form-main-title">Apply To Own A Bakery Café</h2>
          <p className="form-subtitle">
            Complete the form below to start a conversation about owning a Paris Baguette.
          </p>
        </div>

        {/* Form Fields */}
        <form className="bakery-application-form">
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input 
                type="text" 
                className="form-control custom-input" 
                placeholder="First Name*" 
                required 
              />
            </div>
            <div className="col-md-6">
              <input 
                type="text" 
                className="form-control custom-input" 
                placeholder="Last Name*" 
                required 
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input 
                type="tel" 
                className="form-control custom-input" 
                placeholder="Phone*" 
                required 
              />
            </div>
            <div className="col-md-6">
              <input 
                type="email" 
                className="form-control custom-input" 
                placeholder="Email*" 
                required 
              />
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <input 
                type="text" 
                className="form-control custom-input" 
                placeholder="City of Interest*" 
                required 
              />
            </div>
            <div className="col-md-6">
              <select className="form-select custom-input" defaultValue="" required>
                <option value="" disabled>Country*</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
          </div>

          {/* Radio Question 1 */}
          <div className="mb-3 radio-question-group">
            <label className="form-label radio-label">
              Minimum liquid capital investment is $500,000. Do You Meet This Requirement?*
            </label>
            <div className="d-flex gap-4 mt-1">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="liquidCapital" id="capitalYes" />
                <label className="form-check-label" htmlFor="capitalYes">Yes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="liquidCapital" id="capitalNo" />
                <label className="form-check-label" htmlFor="capitalNo">No</label>
              </div>
            </div>
          </div>

          {/* Radio Question 2 */}
          <div className="mb-4 radio-question-group">
            <label className="form-label radio-label">
              Do you have a net worth of at least $1.5 million?*
            </label>
            <div className="d-flex gap-4 mt-1">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="netWorth" id="netWorthYes" />
                <label className="form-check-label" htmlFor="netWorthYes">Yes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="netWorth" id="netWorthNo" />
                <label className="form-check-label" htmlFor="netWorthNo">No</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <Button text='Submit'/>
          </div>

        </form>

      </div>
    </section>
  );
}

export default SectionTwoForm;