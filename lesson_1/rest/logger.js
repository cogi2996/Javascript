import {
    TYPE_LOG,
} from "../constants.js";
function logger(log,type = 'log'){
    console[type](log);
}
export default logger;