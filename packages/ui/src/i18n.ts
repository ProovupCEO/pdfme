import { Lang } from '@pdfme/common';

type DictEn = typeof dictEn;

const dictEn = {
  cancel: 'Cancel',
  field: 'field',
  fieldName: 'Name',
  signature: 'signature',
  require: 'Required',
  uniq: 'Unique',
  inputExample: 'Input Example',
  edit: 'Edit',
  plsInputName: 'Please input name',
  fieldMustUniq: 'Name of field is not unique',
  notUniq: '(Not unique name)',
  noKeyName: 'No name',
  fieldsList: 'List of Fields',
  addNewField: 'Add new field',
  label: 'Label',
  editField: 'Edit Field',
  roleLabel: 'Role',
  rolePlaceholder: 'Add "{{role}}" as new role',
  type: 'Type',
  errorOccurred: 'An error occurred',
  errorBulkUpdateFieldName:
    'Cannot commit the change because the number of items has been changed.',
  commitBulkUpdateFieldName: 'Commit Changes',
  bulkUpdateFieldName: 'Bulk update field names',
};

const dictJa: { [key in keyof DictEn]: string } = {
  cancel: 'キャンセル',
  field: '入力項目',
  fieldName: '項目名',
  require: '必須',
  uniq: '他の項目名と同一不可',
  signature: '署名',
  inputExample: '記入例',
  edit: '編集する',
  label: 'ラベル',
  plsInputName: '項目名を入力してください',
  fieldMustUniq: '他の入力項目名と被っています',
  notUniq: '(他の項目名と重複しています)',
  noKeyName: '項目名なし',
  fieldsList: '入力項目一覧',
  addNewField: '入力項目を追加',
  editField: '入力項目を編集',
  roleLabel: 'ロール',
  type: 'タイプ',
  errorOccurred: 'エラーが発生しました',
  rolePlaceholder: '"{{role}}"を新しいロールとして追加',
  errorBulkUpdateFieldName: '項目数が変更されているため変更をコミットできません。',
  commitBulkUpdateFieldName: '変更を反映',
  bulkUpdateFieldName: '項目名を一括変更',
};

const dictAr: { [key in keyof DictEn]: string } = {
  cancel: 'إلغاء',
  field: 'الحقل',
  fieldName: 'اسم الحقل',
  signature: 'التوقيع',
  require: 'مطلوب',
  label: 'التسمية',
  uniq: 'يجب أن يكون فريداً',
  inputExample: 'مثال',
  edit: 'تعديل',
  plsInputName: 'الرجاء إدخال الاسم',
  fieldMustUniq: 'يجب أن يكون الحقل فريداً',
  notUniq: '(غير فريد)',
  noKeyName: 'لا يوجد اسم للحقل',
  fieldsList: 'قائمة الحقول',
  addNewField: 'إضافة حقل جديد',
  editField: 'تعديل الحقل',
  type: 'النوع',
  roleLabel: 'الدور',
  errorOccurred: 'حدث خطأ',
  rolePlaceholder: 'إضافة "{{role}}" كدور جديد',
  errorBulkUpdateFieldName: 'لا يمكن تنفيذ التغيير لأنه تم تغيير عدد العناصر.',
  commitBulkUpdateFieldName: 'تنفيذ التغييرات',
  bulkUpdateFieldName: 'تغيير الأسماء',
};

const dictTh: { [key in keyof DictEn]: string } = {
  cancel: 'ยกเลิก',
  field: 'ฟิลด์',
  fieldName: 'ชื่อฟิลด์',
  signature: 'ลายเซ็น',
  require: 'จำเป็น',
  uniq: 'ต้องไม่ซ้ำกัน',
  inputExample: 'ตัวอย่าง',
  label: 'ป้ายชื่อ',
  edit: 'แก้ไข',
  plsInputName: 'กรุณาใส่ชื่อ',
  fieldMustUniq: 'ชื่อฟิลด์ต้องไม่ซ้ำกัน',
  notUniq: '(ชื่อฟิลด์ซ้ำกัน)',
  noKeyName: 'ไม่มีชื่อ',
  fieldsList: 'รายการฟิลด์ทั้งหมด',
  addNewField: 'เพิ่มฟิลด์ใหม่',
  editField: 'แก้ไขฟิลด์',
  type: 'ประเภท',
  roleLabel: 'บทบาท',
  errorOccurred: 'เกิดข้อผิดพลาด',
  rolePlaceholder: 'เพิ่ม "{{role}}" เป็นบทบาทใหม่',
  errorBulkUpdateFieldName: 'ไม่สามารถยืนยันการแก้ไขได้เนื่องจากจำนวนรายการมีการเปลี่ยนแปลง',
  commitBulkUpdateFieldName: 'ยืนยันการแก้ไข',
  bulkUpdateFieldName: 'แก้ไขชื่อฟิลด์เป็นชุด',
};

const dictPl: { [key in keyof DictEn]: string } = {
  cancel: 'Anuluj',
  field: 'pole',
  fieldName: 'Klucz pola',
  require: 'wymagany',
  signature: 'podpis',
  label: 'Etykieta',
  uniq: 'unikalny',
  inputExample: 'Przykład',
  edit: 'Edytuj',
  plsInputName: 'Wymagane wprowadzenie klucza pola',
  fieldMustUniq: 'Klucz pola nie jest unikalny',
  notUniq: '(Klucz pola nie jest unikalny)',
  noKeyName: 'Brak nazwy klucza pola',
  fieldsList: 'Lista pól',
  addNewField: 'Dodaj nowe pole',
  editField: 'Edytuj pole',
  type: 'Typ pola',
  roleLabel: 'Rola',
  rolePlaceholder: 'Dodaj "{{role}}" jako nową rolę',
  errorOccurred: 'Wystąpił błąd',
  errorBulkUpdateFieldName: 'Nie można wprowadzić zmian ponieważ liczba elementów uległa zmianie.',
  commitBulkUpdateFieldName: 'Zaakceptuj zmiany',
  bulkUpdateFieldName: 'Masowo aktualizuj klucze pól',
};

const dictFr = {
  cancel: 'Annuler',
  field: 'Champ',
  label: 'Libellé (description du champ)',
  fieldName: 'Nom',
  signature: 'Signature',
  require: 'Requis',
  uniq: 'Unique',
  inputExample: 'Exemple de saisie',
  edit: 'Éditer',
  plsInputName: 'Veuillez saisir un nom',
  fieldMustUniq: "Le nom du champ n'est pas unique",
  notUniq: '(Nom non unique)',
  noKeyName: 'Pas de nom',
  fieldsList: 'Liste des champs',
  addNewField: 'Ajouter un nouveau champ',
  editField: 'Éditer le champ',
  type: 'Type',
  roleLabel: 'Rôle',
  rolePlaceholder: 'Ajouter "{{role}}" comme nouveau rôle',
  errorOccurred: 'Une erreur est survenue',
  errorBulkUpdateFieldName:
    "Impossible de valider les modifications car le nombre d'éléments a changé.",
  commitBulkUpdateFieldName: 'Valider les modifications',
  bulkUpdateFieldName: 'Mise à jour en masse des noms de champs',
};

const addOptionsToText = (text: string, options?: any) => {
  const keys = options ? Object.keys(options) : [];
  keys.forEach((k) => {
    text = text.replace(`{{${k}}}`, options[k]);
  });
  return text;
};
const i18n = (lang: Lang, key: keyof DictEn) => {
  switch (lang) {
    case 'pl':
      return dictPl[key];
    case 'th':
      return dictTh[key];
    case 'ar':
      return dictAr[key];
    case 'ja':
      return dictJa[key];
    case 'fr':
      return dictFr[key];

    default:
      return dictFr[key];
  }
};

export const curriedI18n = (lang: Lang) => (key: keyof DictEn, options?: any) =>
  addOptionsToText(i18n(lang, key), options);
