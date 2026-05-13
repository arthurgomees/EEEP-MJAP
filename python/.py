import time
import os
from rich.console import Console
from rich.live import Live

console = Console()

def clear():
    os.system("cls" if os.name == "nt" else "clear")

def write(text, speed=0.08, cor="white", pausa=1.5):
    linha = ""

    with Live(console=console, refresh_per_second=20, transient=True) as live:
        for letra in text:
            linha += letra
            live.update(f"[bold {cor}]{linha}[/]")
            time.sleep(speed)

    # imprime apenas uma vez no final
    console.print(f"[bold {cor}]{text}[/]")
    time.sleep(pausa)

def sing():
    clear()

    write("A DAff", 0.09, "blue", 1.2)
    write("É ", 0.08, "cyan", 1.8)

    console.print()
    time.sleep(1)

    write("Muito", 0.07, "yellow", 2)

    console.print()
    time.sleep(1.5)

    write("Chata e sem personalidade", 0.08, "green", 2)

    console.print()
    time.sleep(1)

    write("Ela precisa", 0.09, "magenta", 1)

    write("Melhorar isso ksksksks", 0.07, "yellow", 2.5)

    write("Mas muito lindo,", 0.07, "red", 2)

    write("Por isso eu,", 0.07, "red", 2)

    time.sleep(2)
    clear()

if __name__ == "__main__":
    sing()