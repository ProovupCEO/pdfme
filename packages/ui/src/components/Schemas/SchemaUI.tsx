import React, { forwardRef, RefObject, Ref, ReactNode } from 'react';
import { SchemaForUI, isTextSchema, isImageSchema, isBarcodeSchema } from '@pdfme/common';
import { ZOOM, SELECTABLE_CLASSNAME } from '../../constants';
import TextSchema from './TextSchema';
import ImageSchema from './ImageSchema';
import BarcodeSchema from './BarcodeSchema';
import {capitalize} from "../../helper";

export interface SchemaUIProps {
  schema: SchemaForUI;
  editable: boolean;
  onChange: (value: string) => void;
  tabIndex?: number;
  placeholder?: string;
}

type Props = SchemaUIProps & {
  outline: string;
  onChangeHoveringSchemaId?: (id: string | null) => void;
};

const Wrapper = ({
  children,
  outline,
  onChangeHoveringSchemaId,
  schema,
  editable,
}: Props & { children: ReactNode }) => (
  <div
    title={`${schema.key} (📝: ${schema.roleId ?? ''})\n${schema.label ?? ''}`}
    onMouseEnter={() => onChangeHoveringSchemaId && onChangeHoveringSchemaId(schema.id)}
    onMouseLeave={() => onChangeHoveringSchemaId && onChangeHoveringSchemaId(null)}
    className={SELECTABLE_CLASSNAME}
    id={schema.id}
    style={{
      position: 'absolute',
      cursor: editable ? 'pointer' : 'default',
      height: schema.height * ZOOM,
      width: schema.width * ZOOM,
      top: schema.position.y * ZOOM,
      left: schema.position.x * ZOOM,
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

const SchemaUI = (props: Props, ref: Ref<HTMLTextAreaElement | HTMLInputElement>) => {
  const r = {
    [props.editable ? 'ref' : '']: ref as RefObject<HTMLTextAreaElement | HTMLInputElement>,
  };
  const { schema } = props;

  return (
    <Wrapper {...props}>
      {isTextSchema(schema) && <TextSchema {...r} {...props} schema={schema} />}
      {isImageSchema(schema) && <ImageSchema {...r} {...props} schema={schema} />}
      {isBarcodeSchema(schema) && <BarcodeSchema {...r} {...props} schema={schema} />}
    </Wrapper>
  );
};
export default forwardRef<HTMLTextAreaElement | HTMLInputElement, Props>(SchemaUI);
