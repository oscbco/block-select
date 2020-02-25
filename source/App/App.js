import React, { useState } from 'react';

import Select from '../Select/Select';
import css from './_App.scss';
import './blue.css';
import './dark.css';
import './green.css';
import './orange.css';

import * as data from './data';

export default function App () {
  const [ide, setIde] = useState('netbeans');
  const onChange = (value) => {
    console.log('Item selected: ' + value);
    setIde(value);
  };
  console.log(ide);
  return (
    <>
      <div className={css.wrapper}>
        Dark
        <div className={css.form + ' ' + css.dark}>
          <div>
            Select IDE:
          </div>
          <div className={css.flexRow}>
            <Select placeholder='Select an IDE from this list' items={data.ides} onChange={onChange}
              selectedItem={{
                value: ide
              }} defaultItem={{
                value: 'aptana',
                label: 'Aptana'
              }} classes={{
                title: 'dark-title',
                itemContainer: 'dark-item-container',
                item: 'dark-item'
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
                title: 'dark-title',
                itemContainer: 'dark-item-container',
                item: 'dark-item'
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
                title: 'dark-title',
                itemContainer: 'dark-item-container',
                item: 'dark-item'
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
            <Select placeholder='Select an IDE from this list' items={data.ides} onChange={onChange}
              defaultItem={{
                value: 'aptana',
                label: 'Aptana'
              }} classes={{
                title: 'green-title',
                itemContainer: 'green-item-container',
                item: 'green-item'
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
                title: 'green-title',
                itemContainer: 'green-item-container',
                item: 'green-item'
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
                header: 'green-select-header',
                title: 'green-select-title',
                arrow: 'green-select-arrow',
                menu: 'green-select-menu',
                option: 'green-select-option',
                menuWrapper: 'green-select-menu-wrapper'
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
                header: 'orange-select-header',
                title: 'orange-select-title',
                arrow: 'orange-select-arrow',
                menu: 'orange-select-menu',
                option: 'orange-select-option',
                menuWrapper: 'orange-select-menu-wrapper'
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
