import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { isKeyUp, isKeyDown, isKeyEnter, isKeyEsc } from './isKey';
import { getPrevItem, getNextItem } from './cycleArray';
import toTitleCase from './titleCase';

import css from './_Select.scss';

export default function Select (props) {
  const [opened, setOpened] = useState(false);
  const [bounds, setBounds] = useState(null);
  const [selected, setSelected] = useState((props.selectedItem && props.selectedItem.value) || props.defaultItem.value);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (props.selectedItem) {
      setSelected(props.selectedItem.value)
    }
  }, [props.selectedItem]);

  const menuCb = useCallback((ref) => {
    if (ref) {
      const menuBounds = ref.querySelector('[data-section="menu"]').getBoundingClientRect();
      const menuWrapBounds = ref.querySelector('[data-section="menu-wrapper"]').getBoundingClientRect();
      menuBounds.height = Math.min(menuBounds.height, window.innerHeight / 2.2);
      if (opened === true) {
        setDirection((menuWrapBounds.top + menuBounds.height) > window.innerHeight);
      }
      if (!bounds) {
        const arrowBounds = ref.querySelector('[data-section="arrow"]').getBoundingClientRect();
        const selectBounds = ref.getBoundingClientRect();
        menuBounds.width = (selectBounds.width > menuBounds.width ? selectBounds.width : menuBounds.width + arrowBounds.width);
        setBounds(menuBounds);
      }
    }
  }, [opened]);

  const getSelectedLabel = () => {
    const item = props.items.find(item => {
      return item.value === selected;
    });

    if (item === undefined) {
      return props.placeholder;
    } else {
      return item.label ? item.label : toTitleCase(item.value);
    }
  };

  const toggle = (e) => {
    setFocused(true);
    if (e.target.dataset.section === 'header' || e.target.dataset.section === 'arrow') {
      setOpened(!opened);
    } else if (e.target.dataset.value) {
      const value = e.target.dataset.value;
      setSelected(value);
      setActive(value);
      setOpened(false);
      props.onChange(value);
    }
  }

  const close = () => {
    setOpened(false);
    setFocused(false);
  }

  const handleKeyDown = (event) => {
    if ([38, 40, 13, 27].includes(event.keyCode)) {
      event.preventDefault();
    }
    if (opened === true) {
      if (isKeyUp(event.keyCode)) {
        setActive(getPrevItem(props.items, active));
      } else if (isKeyDown(event.keyCode)) {
        setActive(getNextItem(props.items, active));
      } else if ((isKeyEnter(event.keyCode) && active !== -1)) {
        if (props.items[active]) {
          setSelected(props.items[active].value);
        }
      } else if (isKeyEsc(event.keyCode)) {
        setOpened(false);
      }
    } else {
      if (isKeyDown(event.keyCode)) {
        setOpened(true);
      }
    }
  };

  const items = props.items.map(function (item, index) {
    const label = item.label ? item.label : toTitleCase(item.value);
    const check = item.value === selected ? <div className={css.icon}><svg width="100%" viewBox="0 0 24 21"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></div> : '';

    return (
      <div className={css.option + ' ' + (props.classes.option || ' oscbco-block-select-option')} data-is-active={index === active} key={item.value} data-value={item.value}>
        {label} {check}
      </div>
    );
  });

  return (
    <div ref={menuCb} tabIndex={-1} data-opened={opened} data-focused={focused} data-direction={direction ? 'top' : 'down'} className={css.select + ' ' + (props.classes.select || ' oscbco-block-select')} onClick={toggle} onKeyDown={handleKeyDown} onBlur={close} style={{ minWidth: (bounds ? bounds.width + 'px' : '70px') }}>
      <div data-section='header' className={css.header + ' ' + (props.classes.header || ' oscbco-block-select-header')}>
        <span data-section='header' className={css.title + ' ' + (props.classes.title || ' oscbco-block-select-title')}>
          {getSelectedLabel()}
        </span>
        <span data-section='arrow' className={css.arrow + ' ' + (props.classes.arrow || ' oscbco-block-select-arrow')}>
          <svg data-section='arrow' width="100%" viewBox="0 0 24 24">
            <path data-section='arrow' d="M12 21l-12-18h24z"/>
          </svg>
        </span>
      </div>
      <div data-section='menu-wrapper' className={css.menuWrapper + ' ' + (props.classes.menuWrapper || ' oscbco-block-select-menu-wrapper')} style={{ height: (opened ? bounds.height + 'px' : '0px') }}>
        <div style={{ height: (bounds ? bounds.height + 'px' : '100%') }}>
          <div data-section='menu' className={css.menu + ' ' + (props.classes.menu || ' oscbco-block-select-menu')} style={{ minWidth: (bounds ? bounds.width + 'px' : '70px') }}>
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

Select.defaultProps = {
  classes: {},
  placeholder: 'Select option',
  defaultItem: {},
  items: [],
  onChange: () => {}
};

Select.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
  classes: PropTypes.object,
  defaultItem: PropTypes.object,
  selectedItem: PropTypes.object
};
