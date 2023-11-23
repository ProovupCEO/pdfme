import React, { useEffect, useContext, ReactNode, useRef } from 'react';
import { ZOOM, UIRenderProps, SchemaForUI, Schema } from '@pdfme/common';
import { SELECTABLE_CLASSNAME } from '../constants';
import { PluginsRegistry, OptionsContext } from '../contexts';
import { capitalize } from '../helper';

type RendererProps = Omit<
  UIRenderProps<Schema>,
  'value' | 'schema' | 'onChange' | 'rootElement' | 'options'
> & {
  schema: SchemaForUI;
  onChange: (value: string) => void;
  outline: string;
  onChangeHoveringSchemaId?: (id: string | null) => void;
  scale: number;
};

const Wrapper = ({
  children,
  outline,
  onChangeHoveringSchemaId,
  schema,
}: RendererProps & { children: ReactNode }) => (
  <div
    title={`${schema.key} (📝: ${schema.roleId ?? ''})\n${schema.label ?? ''}`}
    onMouseEnter={() => onChangeHoveringSchemaId && onChangeHoveringSchemaId(schema.id)}
    onMouseLeave={() => onChangeHoveringSchemaId && onChangeHoveringSchemaId(null)}
    className={SELECTABLE_CLASSNAME}
    id={schema.id}
    style={{
      position: 'absolute',
      cursor: 'pointer',
      height: schema.height * ZOOM,
      width: schema.width * ZOOM,
      top: schema.position.y * ZOOM,
      left: schema.position.x * ZOOM,
      transform: `rotate(${schema.rotate ?? 0}deg)`,
      outline,
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: 'black',
        padding: '2px',
        fontSize: '10px',
        maxWidth: '50px', // Largeur maximale
        overflow: 'hidden', // Masque le texte qui déborde
        whiteSpace: 'nowrap', // Empêche les retours à la ligne
        textOverflow: 'ellipsis', // Ajoute des points de suspension à la fin du texte tronqué
        zIndex: 1,
      }}
    >
      {schema.key ? capitalize(schema.key) : ''}
    </div>
    {children}
  </div>
);

const Renderer = (props: RendererProps) => {
  const pluginsRegistry = useContext(PluginsRegistry);
  const options = useContext(OptionsContext);

  const { schema, mode, onChange, stopEditing, tabIndex, placeholder, scale } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && schema.type) {
      const render = Object.values(pluginsRegistry).find(
        (plugin) => plugin?.propPanel.defaultSchema.type === schema.type
      )?.ui;

      if (!render) {
        console.error(`[@pdfme/ui] Renderer for type ${schema.type} not found.
Check this document: https://pdfme.com/docs/custom-schemas`);
        return;
      }

      ref.current.innerHTML = '';

      const editable = mode === 'form' || mode === 'designer';

      render({
        value: schema.data,
        schema,
        rootElement: ref.current,
        mode,
        onChange: editable ? onChange : undefined,
        stopEditing: editable ? stopEditing : undefined,
        tabIndex,
        placeholder,
        options,
      });
    }
    return () => {
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, [JSON.stringify(schema), mode, options, scale]);

  return (
    <Wrapper {...props}>
      <div style={{ height: '100%', width: '100%' }} ref={ref} />
    </Wrapper>
  );
};
export default Renderer;
