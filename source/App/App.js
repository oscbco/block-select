import React, { useState } from 'react';

import Select from '../Select/Select';
import css from './_App.scss';
import './themes/blue.css';
import './themes/dark.css';
import './themes/orange.css';
import './themes/green.css';

import * as data from './data';

export default function App () {
  const [ide, setIde] = useState('netbeans');
  const onChangeIde = (value) => {
    setIde(value);
  };
  const onChange = (value) => {

  };

  return (
    <>
      <div className={css.wrapper}>
        Dark
        <div className={css.form + ' ' + css.dark}>
          <div>
            Select IDE:
          </div>
          <div className={css.flexRow}>
            <Select placeholder='Select an IDE from this list' items={data.ides} onChange={onChangeIde}
              selectedItem={{
                value: ide
              }} defaultItem={{
                value: 'aptana',
                label: 'Aptana'
              }} classes={{
                select: 'dark-select',
                title: 'dark-title',
                arrow: 'dark-arrow',
                menuWrapper: 'dark-menu-wrapper',
                option: 'dark-option'
              }} />
            <div className={css.button} onClick={() => {
              setIde('aptana');
            }}>
              Apply
            </div>
          </div>

          <div>
              Select Language:
          </div>
          <div className={css.flexRow}>
            <Select placeholder='Select a language' items={data.programmingLanguages} onChange={onChange}
              classes={{
                select: 'dark-select',
                title: 'dark-title',
                arrow: 'dark-arrow',
                menuWrapper: 'dark-menu-wrapper',
                option: 'dark-option'
              }} />
            <div className={css.button}>
              Apply
            </div>
          </div>

          <div>
            Select Font Size:
          </div>
          <div className={css.flexRow}>
            <Select placeholder=' ' items={data.fontSizes} onChange={onChange}
              defaultItem={{
                value: '14',
                label: '14px'
              }} classes={{
                select: 'dark-select',
                title: 'dark-title',
                arrow: 'dark-arrow',
                menuWrapper: 'dark-menu-wrapper',
                option: 'dark-option'
              }} />
            <div className={css.button}>
              Apply
            </div>
          </div>
        </div>

        <br />
        Green
        <div className={css.form + ' ' + css.dark}>
          <div>
            Select IDE:
          </div>
          <div className={css.flexRow}>
            <Select placeholder='Select an IDE from this list' items={data.ides} onChange={onChangeIde}
              selectedItem={{
                value: ide
              }} defaultItem={{
                value: 'aptana',
                label: 'Aptana'
              }} classes={{
                select: 'blue-select',
                title: 'blue-title',
                arrow: 'blue-arrow',
                menuWrapper: 'blue-menu-wrapper',
                option: 'blue-option'
              }} />
            <div className={css.button}>
              Apply
            </div>
          </div>

          <div>
            Select Language:
          </div>
          <div className={css.flexRow}>
            <Select placeholder='Select a language' items={data.programmingLanguages} onChange={onChange}
              classes={{
                select: 'green-select',
                title: 'green-title',
                arrow: 'green-arrow',
                menuWrapper: 'green-menu-wrapper',
                option: 'green-option'
              }} />
            <div className={css.button}>
              Apply
            </div>
          </div>

          <div>
            Select Font Size:
          </div>
          <div className={css.flexRow}>
            <Select placeholder=' ' items={data.fontSizes} onChange={onChange}
              defaultItem={{
                value: '14',
                label: '14px'
              }} classes={{
                select: 'green-select',
                title: 'green-title',
                arrow: 'green-arrow',
                menuWrapper: 'green-menu-wrapper',
                option: 'green-option'
              }} />
            <div className={css.button}>
              Apply
            </div>
          </div>
          <div>
            Select Font Size:
          </div>
          <div className={css.flexRow}>
            <Select placeholder=' ' items={data.fontSizes} onChange={onChange}
              defaultItem={{
                value: '14',
                label: '14px'
              }} classes={{
                select: 'orange-select',
                title: 'orange-title',
                arrow: 'orange-arrow',
                menuWrapper: 'orange-menu-wrapper',
                option: 'orange-option'
              }} />
            <div className={css.button}>
              Apply
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
