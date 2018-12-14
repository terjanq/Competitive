import random, string
N=10**7
pal_yes = '0\n' + ''.join(random.choice(string.lowercase) for _ in range(N))
pal_no_most_likely = '0\n' + ''.join(random.choice(string.lowercase) for _ in range(2*N))
open('pal_yes.in', 'w').write(pal_yes + pal_yes[::-1])
open('pal_no.in', 'w').write(pal_no_most_likely)