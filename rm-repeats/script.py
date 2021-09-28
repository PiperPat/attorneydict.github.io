import re

f = open("../dict.js", "r")
all_data = f.read()
f.close()
words = all_data.split(";")

unique_vars = []
unique_words = []
repeats = []

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

glossary_output = 'const complete_glossay = [\n'
for unique_var in unique_vars:
    glossary_output = glossary_output + unique_var + ",\n"
glossary_output = glossary_output + '\n];'

print("repeated words:")
for repeat in repeats:
    print(repeat, end=" ")

f2 = open("generated_glossary.js", "w")
f2.write(glossary_output)
f2.close()
