import React from 'react';
import s from 'styled-components';
import { Element } from 'react-scroll';

const SubmitButton = s.button`
  font-size: 1.2rem;
  font-weight: 200;
  width: 150px;
  margin-top: 10px;
`;

export const Register = () => (
  <section className="hero is-info is-bold">
    <Element name="register-beta">
      <div className="hero-body">
        <div className="container">
          <h1 className="content-header title has-text-centered">
            Register for the beta period
          </h1>
          <p className="has-text-centered">
            If you are a corporation, SME or a sole trader and interested in participating in the beta programme. Please enter your email address below.
          </p>
          <div className="columns" style={{ marginTop: '10px' }}>
            <div id="mc_embed_signup" className="column is-6 is-offset-3">
              <form action="//fimerra.us16.list-manage.com/subscribe/post?u=034f1ef4c2063212622ad760a&amp;id=f59e0c3696" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll" className="has-text-centered">
                  <div className="field">
                    <div className="control">
                      <label>
                        <input 
                          ref={email => { this.email = email }} 
                          className="field has-text-centered" 
                          type="email" 
                          name="EMAIL" 
                          id="mce-EMAIL"
                          placeholder="youremail@address.com"
                          />
                        <span/>
                      </label>
                    </div>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}/>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}/>
                  </div>
                  <SubmitButton type="submit" className="button is-primary">Submit</SubmitButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Element>
  </section>
);

export default Register;
