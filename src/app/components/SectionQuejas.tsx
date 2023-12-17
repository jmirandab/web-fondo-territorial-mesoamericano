"use client"

import React, { FormEvent, MouseEvent, useState, useRef } from 'react';
import Section from './Section';
import Styles from '../../app/css/sectionQuejas.module.css'
import StylesPage from '../../app/page.module.css'
import { useTranslation } from '../i18n/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import clsx from 'clsx';

interface FormState {
  isSuccess: boolean | undefined;
  isLoading: boolean;
}

const SectionBoard = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [formState, setformState] = useState<FormState>({ isSuccess: undefined, isLoading: false });
  const dialogSuccessRef = useRef<HTMLDialogElement>(null);
  const dialogLoadingRef = useRef<HTMLDialogElement>(null);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const form = document.querySelector('form');
    if (!form)
      return;

    const formData = Object.fromEntries(new FormData(form).entries())

    dialogLoadingRef.current?.showModal();
    setformState({ isLoading: true, isSuccess: undefined })

    console.log(formData);
    axios.post('/api/sendemail', formData)
      .then(function (response) {

        dialogLoadingRef.current?.close();
        setformState({isLoading:false, isSuccess: true});
        dialogSuccessRef.current?.showModal(); 
        console.log(response);
      })
      .catch(function (error) {

        dialogLoadingRef.current?.close();
        dialogSuccessRef.current?.showModal();
        setformState({isLoading:false, isSuccess: false});
        console.log(error);
      });

    return false;
  }

  return (
    <Section className={Styles.sectionQuejas}>
      <dialog className={clsx(formState.isSuccess && Styles.success, formState.isSuccess === false && Styles.fail)} ref={dialogSuccessRef}>
        <div className={Styles.dialogContent}>
          <FontAwesomeIcon className={Styles.success} icon={faCircleCheck} />
          <FontAwesomeIcon className={Styles.fail} icon={faExclamationCircle} />
          <p>{formState.isSuccess ? t('sectionForm.success') : t('sectionForm.fail')}</p>
          <button autoFocus
            onClick={() => { dialogSuccessRef.current?.close(); }}
          >{t('sectionForm.close')}</button>
        </div>
      </dialog >
      <dialog className={Styles.loading} ref={dialogLoadingRef}>
        <div className={Styles.dialogContent}>
          <FontAwesomeIcon icon={faSpinner} className="fas fa-spinner fa-spin" />

          {t('sectionForm.loading')}
        </div>
      </dialog>
      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPage.whiteH2}>
          {t('sectionForm.title')}
        </h2>
        <form onSubmit={onSubmitHandler}
        >
          <fieldset>
            <legend>{t('sectionForm.legend')}</legend>
            <div className={Styles.control}>
              <label htmlFor="nombre">{t('sectionForm.nombre')}</label>
              <input type="text" id="nombre" name="nombre" required
              />
            </div>
            <div className={Styles.control}>
              <label htmlFor="telefono">{t('sectionForm.telefono')}</label>
              <input type="tel" id="telefono" name="telefono" required />
            </div>
            <div className={Styles.control}>
              <label htmlFor="correo">{t('sectionForm.correo')}</label>
              <input type="email" id="correo" name="correo" required />
            </div>
            <div className={Styles.control}>
              <label htmlFor="etnia">{t('sectionForm.etnia')}</label>
              <select id="etnia" name="etnia">
                <option value="Indigena">{t('sectionForm.Indigena')}</option>
                <option value="Afrodescendiente">{t('sectionForm.Afrodescendiente')}</option>
                <option value="Campesino">{t('sectionForm.Campesino')}</option>
                <option value="Otro" selected>{t('sectionForm.Otro')}</option>
              </select>
            </div>
            <div className={Styles.control}>

              <label htmlFor="comunidadLinguistica">{t('sectionForm.comunidadLinguistica')}</label>
              <select id="comunidadLinguistica" name="comunidadLinguistica">
                <option value="Castellano">{t('sectionForm.Castellano')}</option>
                <option value="Ingles">{t('sectionForm.Ingles')}</option>
                <option value="Miskitu">{t('sectionForm.Miskitu')}</option>
                <option value="Cabécar">{t('sectionForm.Cabécar')}</option>
                <option value="Otro">{t('sectionForm.Otro')}</option>
              </select>
            </div>
            <div className={Styles.control}>

              <label htmlFor="organizacion">{t('sectionForm.organizacion')}</label>
              <input type="text" id="organizacion" name="organizacion" />
            </div>
            <div className={Styles.control}>
              <label htmlFor="comunidad">{t('sectionForm.comunidad')}</label>
              <input type="text" id="comunidad" name="comunidad" />
            </div>
            <div className={Styles.control}>
              <label htmlFor="municipio">{t('sectionForm.municipio')}</label>
              <input type="text" id="municipio" name="municipio" />
            </div>
            <div className={Styles.control}>
              <label htmlFor="departamento">{t('sectionForm.departamento')}</label>
              <input type="text" id="departamento" name="departamento" />
            </div>
          </fieldset>
          <div className={Styles.controlVertical}>
            <label htmlFor="textarea1">{t('sectionForm.textarea1')}</label>
            <textarea id="textarea1" name="textarea1" required></textarea>
          </div>
          <div className={Styles.controlVertical}>
            <label htmlFor="textarea2">{t('sectionForm.textarea2')}</label>
            <textarea id="textarea2" name="textarea2" ></textarea>
          </div>
          <div className={Styles.controlVertical}>
            <label htmlFor="textarea3">{t('sectionForm.textarea3')}</label>
            <textarea id="textarea3" name="textarea3" ></textarea>
          </div>
          <div className={Styles.controlVertical}>
            <label htmlFor="textarea4">{t('sectionForm.textarea4')}</label>
            <textarea id="textarea4" name="textarea4" ></textarea>
          </div>
          <div className={Styles.controlVertical}>
            <label htmlFor="textarea5">{t('sectionForm.textarea5')}</label>
            <textarea id="textarea5" name="textarea5" ></textarea>
          </div>
          <button type="submit" >{t('sectionForm.submit')}</button>
        </form>
      </div>
    </Section>
  );
};

export default SectionBoard;