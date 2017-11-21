import { apiUrl } from '../config/constants';
import axios from 'axios';
import $ from 'jquery';

export function getInvoices(invoiceId) {
  return axios.get(apiUrl + 'invoices')
    .then(response => {
      return response.data;
    });
}
export function getCompanyDetails(invoiceId) {
  return axios.get(apiUrl + 'company/'+invoiceId)
    .then(response => {
      return response.data;
    });
}
export function saveCustomerDetails(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'customer',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function saveCompanyDetails(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'company',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function saveBankDetails(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'bank',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function saveTaxDetails(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'tax',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function saveComments(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'comments',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function downloadInvoice(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'downloadpdf',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function sendInvoice(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'sendinvoice',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function uploadLogo(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'logo1',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}
export function uploadSignture(data) {
  return $.ajax({
    type: 'POST',
    url: apiUrl + 'signature1',
    data: JSON.stringify(data),
    mode: 'no-cors',
    dataType: "json",
  });
}

