import requests

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ECvJ_yBNz_UfMmCvWEbT_2ZWXdzbFFQZ-1Y5K2NGgeHn',
}

data = '{ "url": "https://1230-2001-fd8-f09f-6118-2475-848-620a-6d08.ngrok-free.app", "event_types": [ { "name": "PAYMENT.AUTHORIZATION.CREATED" }, { "name": "PAYMENT.AUTHORIZATION.VOIDED" } ] }'

response = requests.post('https://api-m.sandbox.paypal.com/v1/notifications/webhooks', headers=headers, data=data)
