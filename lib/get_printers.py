#!/usr/bin/env python

# Created by Phinehas Bynum on 10/1/14.
# Ported to Python by Hawken Rives on 10/12/14.

from subprocess import check_output
from .data_helpers import save_data, load_data, needs_reload
from sys import argv

all_printers = [
    'mfc-bc110',
    'mfc-casualreading',
    'mfc-it',
    'mfc-crossroads',
    'mfc-ellingson',
    'mfc-fireside',
    'mfc-hillkitt',
    'mfc-hoyme',
    'mfc-kierk',
    'mfc-kildahl',
    'mfc-larson',
    'mfc-mellby',
    'mfc-mohn',
    'mfc-pastor',
    'mfc-rand',
    'mfc-rml-1st',
    'mfc-rml115',
    'mfc-rml330',
    'mfc-rml386',
    'mfc-rml433',
    'mfc-rml560',
    'mfc-rmlref',
    'mfc-rns-2nd',
    'mfc-rns258',
    'mfc-scilib',
    'mfc-thorson',
    'mfc-toh101',
    'mfc-toh3',
    'mfc-toh3-east',
    'mfc-toh3-west',
    'mfc-ytt118',
]

codes = {
    '00': 'No Error',
    '0': 'Low Paper',
    '1': "No Paper",
    '2': "Low Toner",
    '3': "No Toner",
    '4': "Door Open",
    '5': "Printer Jammed",
    '6': "Printer Offline",
    '7': "Service Requested",
    '8': "Input Tray Missing",
    '9': "Output Tray Missing",
    '10': "Marker Supply Missing",
    '11': "Output Tray Nearly Full",
    '12': "Output Tray Full",
    '13': "Input Tray Empty",
    '14': "Preventative Maintenance Overdue",
    # TOSHIBA printers have compound status codes based on
    # paper_empty, paper_nearly_empty, and paper_available.
    # We don't care. All of these will print as "paper_empty" for our purposes.
    '@': "Tray 1 Empty",
    '?': "Tray 2 Empty",
    'H': "Drawer Open",
    'C': "Drawer Open",
    'C8': "Drawer Open",
    'C0': "Tray 1 Empty",
    'C1': "Tray 1 Empty",
    '80': "Paper Low",
    '88': "Toner Door Open (we think)",
    '04': "Paper Misfeed",
    'A0': "Black Toner Low",
    'A': "Tray 2 Empty",
    'L': "Paper Misfeed in Finisher",
    'I': "Fuser Error (Call EO Johnson)",
    '05': "Fuser Error (Call EO Johnson)",
    '85': "Fuser Error (Call EO Johnson)",
    '01': "Fatal Error (Call EO Johnson)",
    '84': "Open the front door, and clean the slit glass and main charger",
    '90': "Black toner empty; replace cartridge now",
    '81': "Fatal Error (Call EO Johnson)",
    '08': "Finisher door open; please close door",
    'C4': "Paper Misfeed in Printer",
    'h': "Black Toner Near Empty - Please Prepare New Toner Cartridge",
    'D': "Paper Misfeed",
}

awk = "| awk 'NF>1{print $NF}'"
printer_base_url = '.printer.stolaf.edu'


def call_printer(url, numeric_path):
    return check_output(['snmpwalk', '-c', 'public', '-v', 1, url, numeric_path])


def snmp_model(printer_url):
    model = call_printer(printer_url, '1.3.6.1.2.1.25.3.2.1.3.1')
    return model.strip()


def snmp_mfc_toner(printer_url):
    toner_level = call_printer(printer_url, '1.3.6.1.2.1.43.11.1.1.9.1.1')  # | awk
    return int(toner_level.strip())


def snmp_mfc_all_toner(printer_url):
    # needs work
    toner_level = call_printer(printer_url, '1.3.6.1.2.1.43.11.1.1.9.1')  # | awk
    return toner_level.strip()


def snmp_status(printer_url):
    printer_status = call_printer(printer_url, '1.3.6.1.2.1.25.3.5.1.1')  # | awk
    return printer_status.strip()


def snmp_status_code(printer_url):
    raw_code = call_printer(printer_url, '1.3.6.1.2.1.25.3.5.1.2')  # | awk

    # Remove wrapping quotes, if present
    code = raw_code.strip()
    if len(code) is 0:
        return ""

    if (code[0] == code[-1]) and code.startswith('"'):
        code = code[1:-1]

    # Fix some odd encoding issues
    if len(code) is 1:
        if ord(code) is 200:
            code = '?'
        if ord(code) is 192:
            code = '@'

    # Look up the code
    if code in codes:
        return codes[code]

    # Turn something like C0 into [67 32]
    raw_code = ''
    for ch in code:
        raw_code += str(ord(ch)) + ' '
    raw_code = raw_code.strip()
    raw_code = '[' + raw_code + ']'

    return 'Unknown Code %s (raw code: %s)' % (code, raw_code)


def check_printers(printers):
    printer_info = []

    for printer_name in printers:
        printer = {
            'name': printer_name,
            'url': printer_name + printer_base_url,
        }

        # printer['model'] = snmp_model(printer['name'])
        printer['toner'] = snmp_mfc_toner(printer['url'])
        printer['status'] = snmp_status(printer['url'])
        printer['error'] = snmp_status_code(printer['url'])

        printer_info.append(printer)

    return printer_info


def check_all_printers():
    # filename = 'printer-status.json'
    filename = 'raw-printers.json'
    return load_data(filename)
    # if not needs_reload(filename, minutes=5):
    #     return load_data(filename)

    # save_data(filename, check_printers(all_printers))


if __name__ == '__main__':
    if len(argv) > 1:
        results = check_printers(argv[1:])
    else:
        results = check_all_printers()

    for result in results:
        print('%(name)s: %(error)s (%(toner)s%%)' % result)