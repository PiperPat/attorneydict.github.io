'''
author: anton huggard

tldr: manually checking for duplicates in the dictionary was slow.

This script duplicate variables in JS. It also generates the glossary.

It works on a first-in-first-served basis. Later entries with images or
whatever lose out. If this happens, go back and delete the earlier
guys. 

'''


import re

f = open("../dict.js", "r")
all_data = f.read()
f.close()
words = all_data.split(";")

unique_vars = []
unique_words = []
repeats = []



if len(words) > 1100:
    print("lots and lots of words :O ")
    for word in words[:1099]:
        x = 3
    for word in words[1099:]:
        print(word)
else:
    print("under 1100 words ")

    for word in words:
        segments = word.split("\n")
        for seg in segments:
            if "const" in seg:
                var = re.split('=| |\t', seg)[1].lower()
                if var not in unique_vars:
                    unique_vars.append(var)
                    unique_words.append(word)
                else:
                    repeats.append(var)

    output = '; \n'.join(unique_words)
    f = open("output.js", "w")
    f.write(output)
    f.close()

if len(unique_words) > 1100:
    alpha_list = unique_words[:1099]
    beta_list = unique_words[1099:]
    output_alpha = '; \n'.join(alpha_list)
    output_beta = '; \n'.join(beta_list)
    fa = open("output_alpha.js", "w")
    fa.write(output_alpha)
    fa.close()
    fb = open("output_beta.js", "w")
    fb.write(output_beta)
    fb.close()
else:
    

glossary_output = 'const complete_glossay = [\n'
for unique_var in unique_vars:
    glossary_output = glossary_output + unique_var + ",\n"
glossary_output = glossary_output + '\n];'

#print("repeated words:")
#for repeat in repeats:
#    print(repeat, end=" ")

f2 = open("generated_glossary.js", "w")
f2.write(glossary_output)
f2.close()
