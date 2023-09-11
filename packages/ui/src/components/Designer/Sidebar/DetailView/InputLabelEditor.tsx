import React, { useContext } from 'react';
import { SchemaForUI } from '@pdfme/common';
import { readFiles } from '../../../../helper';
import { FontContext, I18nContext } from '../../../../contexts';
import { SidebarProps } from '..';
import { XMarkIcon } from '@heroicons/react/24/outline';

const InputLabelEditor = (
  props: Pick<SidebarProps, 'changeSchemas'> & { activeSchema: SchemaForUI }
) => {
  const { changeSchemas, activeSchema } = props;
  const i18n = useContext(I18nContext);

  return (
    <div>
      <label>{i18n('label')}</label>
      <textarea
        rows={3}
        onChange={async (e) => {
          changeSchemas([{ key: 'label', value: e.target.value, schemaId: activeSchema.id }]);
        }}
        style={{
          width: '100%',
          border: '1px solid #767676',
          borderRadius: 2,
          color: '#333',
          background: 'none',
        }}
        value={activeSchema.label}
      />
    </div>
  );
};

export default InputLabelEditor;
