import socket

# 192.168.1.20
# 192.168.1.22 bara de cafe
# 192.168.1.24
# List of printer IPs and common port
# printer_ips = ["192.168.1.20", "192.168.1.22", "192.168.1.24"]
printer_ips = ["192.168.1.22"]
printer_port = 9100
# Path to your text file
file_path = r"C:\Users\alanr\WebstormProjects\px_pos\src\assets\python_tests\Prueba.txt"
# Cut command for the printer (Adjust as needed)
cut_command = b'\x0a\x0a\x1d\x56\x42\x00'

def read_data(file_path):
    try:
        with open(file_path, 'rb') as file:
            data = file.read()
            print("File read successfully.")
            return data
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        raise
    except Exception as e:
        print(f"An error occurred while reading the file: {e}")
        raise

def send_to_printer(ip, port, data, cut_cmd):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            # Attempt to connect to printer
            sock.connect((ip, port))
            print(f"Connected to printer at {ip}:{port}")
            # Send the data
            sock.sendall(data)
            print("Data sent successfully.")
            # Send the cut command
            sock.send(cut_cmd)
            print("Cut command issued. Printing should start shortly.")
    except socket.error as e:
        print(f"Socket error: {e}")
    except Exception as e:
        print(f"An error occurred while sending the data to the printer: {e}")

# Read the data from file
data = read_data(file_path)

# Send the data to each printer
for ip in printer_ips:
    send_to_printer(ip, printer_port, data, cut_command)