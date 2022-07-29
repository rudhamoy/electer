import { useStateContext } from '../context/ContextProvider';
import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const { TreeNode } = TreeSelect;

const SelectComponent = () => {
  const [value, setValue] = useState();

  const {  setInventoryFilData } = useStateContext()

  const onChange = (newValue) => {
    setValue(newValue);
    setInventoryFilData(newValue)
  };

  return (
    <TreeSelect
      showSearch
      style={{
        width: '20%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Filter Product"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="particular" title="particular">
          <TreeNode value="chair" title="Chair" />
          <TreeNode value="table" title="Table" />
        </TreeNode>
        <TreeNode value="category" title="Category">
          <TreeNode value="furniture" title="Furniture" />
          <TreeNode value="electronic" title="Electronic" />
        </TreeNode>
        <TreeNode value="subcategory" title="Sub-category">
          <TreeNode value="Carbon" title="Carbon" />
          <TreeNode value="Plastic" title="Plastic" />
          <TreeNode value="Wood" title="Wood" />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  );
};

export default SelectComponent;