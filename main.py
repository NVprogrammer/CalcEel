
import eel
from  StringCalculator import SolveMathProblem

@eel.expose
def calc(a):
    res=SolveMathProblem(a)
    return  res

if __name__ == '__main__':
    eel.init('front')
    eel.start('index.html', mode="chrome", size=(360, 320))