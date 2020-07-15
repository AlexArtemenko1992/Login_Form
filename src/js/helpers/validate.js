const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
  nickname: /^[A-z_]([A-z0-9_]{1,15})$/,
  first_name: /^[А-яA-z][A-zА-я\-\s]{0,30}[^-^\s]$/,
  last_name: /^[А-яA-z][A-zА-я\-\s]{0,30}[^-^\s]$/,
  phone: /^[0][0-9\-\s]{1,15}[^-^\s]$/,
  country: /.*[A-z]$/,
  city: /.*[A-z]$/,
};

export function validate(el) {
  const regExpName = el.dataset.required;

  if (!regExpDic[regExpName]) return true;

  return regExpDic[regExpName].test(el.value);
}
