import React, { useContext } from 'react';
import { SchemaForUI } from '@pdfme/common';
import { I18nContext } from '../../../../contexts';
import { SidebarProps } from '..';

const ExampleInputEditor = (
  props: Pick<SidebarProps, 'changeSchemas'> & { activeSchema: SchemaForUI }
) => {
  const { changeSchemas, activeSchema } = props;
  const i18n = useContext(I18nContext);

  return (
    <div>
      {activeSchema.type === 'image' ? (
        <></>
      ) : (
        <>
          <label>{i18n('inputExample')}</label>
          <textarea
            rows={6}
            onChange={async (e) => {
              changeSchemas([{ key: 'data', value: e.target.value, schemaId: activeSchema.id }]);
            }}
            style={{
              width: '100%',
              border: '1px solid #767676',
              borderRadius: 2,
              color: '#333',
              background: 'none',
            }}
            value={activeSchema.data}
          />
        </>
      )}
    </div>
  );
};

export default ExampleInputEditor;
