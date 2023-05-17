const Query = (e) => document.querySelector(e);
const GetId = (e) => document.getElementById(e);
const QueryAll = (e) => document.querySelectorAll(e);
const AddClass = (e, classes) => Query(e).classList.add(classes);
const RemoveClass = (e, classes) => Query(e).classList.remove(classes);
const ToggleClass = (e, classes) => Query(e).classList.toggle(classes);
const ContainsClass = (e, classes) => Query(e).classList.contains(classes);
export { Query, GetId, QueryAll, AddClass, RemoveClass, ToggleClass, ContainsClass }