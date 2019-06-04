import React, { Component } from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
// import 'rc-dropdown/assets/index.css'
import '../../../assets/styles/dropdown.css';
import { Icon } from '../../elements/utils';
import { DropWrapper, DropItem } from './styled';

class SelectUnlockType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: props.options,
    };
  }

  _onSelect = e => {
    const { props, state } = this;
    const k = e.key;
    const option = state.options[k];
    if (option) {
      this.setState({
        value: option.render ? option.render() : option.text,
      });
      props.onChange && props.onChange(option.value, option.text);
    }
  };

  _onSearch = e => {
    const { props } = this;
    let valueSearch = e.target.value;
    valueSearch = valueSearch.trim().toUpperCase();
    const searchItems = props.options.filter(el => {
      return el.text.toUpperCase().includes(valueSearch) || el.value.toUpperCase().includes(valueSearch);
    });
    this.setState({
      options: searchItems,
    });
  };

  _buildList = () => {
    // console.log('Call buildList')
    const { state } = this;
    const { withSearchBox } = this.props;
    const items = state.options.map((value, index) => {
      return <MenuItem key={index}>{value.render ? value.render : value.text}</MenuItem>;
    });

    // console.log('items CK', items)
    return (
      <Menu onSelect={this._onSelect}>
        {withSearchBox && (
          <MenuItem disabled className="search-box">
            <Icon type="search" />
            <input autoFocus placeholder="Search Asset" onChange={this._onSearch} />
          </MenuItem>
        )}
        {items}
      </Menu>
    );
  };

  _buildDefaultValue = () => {
    // console.log('Call buildDefaultValue')
    const { defaultValue } = this.props;
    if (defaultValue) {
      return defaultValue;
    }
    const { options } = this.state;
    return options.length === 0 ? '' : options[0].render ? options[0].render() : options[0].text;
  };

  render() {
    const { width, className } = this.props;
    const { value } = this.state;
    // console.log('option1 CK', this.props.options)
    return (
      <DropWrapper width={width} className={'select '.concat(className || '')}>
        <Dropdown
          trigger={['click']}
          overlay={this._buildList()}
          animation="slide-up"
          onVisibleChange={this._onVisibleChange}
        >
          <div>
            <div className="selectValue">{value || this._buildDefaultValue()}</div>
            <DropItem />
          </div>
        </Dropdown>
        {/* <DefaultItem></DefaultItem> */}
      </DropWrapper>
    );
  }
}

SelectUnlockType.defaultProps = {
  options: [
    {
      text: '',
      value: '',
    },
  ],
  defaultValue: null,
  onChange() {},
  width: '',
  withSearchBox: true,
};

export default SelectUnlockType;
