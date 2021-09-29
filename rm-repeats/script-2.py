import re
import math


f = open("../dict.js", "r")
all_data = f.read()
f.close()
words = all_data.split(";")

list_len = 1000
sigma = len(words)
num_lists = math.ceil(sigma / list_len)

master_list = []

for i in range(0, num_lists):
    list_partition = words[i * list_len : (i * list_len) + list_len]
    master_list.append(list_partition)


global_repeats = []
global_uniques = []


def do_thing(json_input):

    local_repeats = []
    local_uniques = []

    local_data = {}

    for entry in json_input:
        segments = entry.split("\n")
        for seg in segments:
            if "const" in seg and "construction" not in seg:
                const_name = re.split('=| |\t', seg)[1].lower()
                if (const_name not in local_uniques) and const_name != "": 
                    local_uniques.append(const_name)
                    local_data[const_name] = entry
                else:
                    local_repeats.append(const_name)

    output_data = []

    for word in local_uniques:
        if word not in global_uniques:
            global_uniques.append(word)
            output_data.append(local_data[word])

    return output_data


print(len(master_list))

final_output = ""

for i in range(len(master_list)):
    clean_data = do_thing(master_list[i])
    output = '; \n'.join(clean_data)
    output = output + "; \n" # for the final line
    final_output = final_output + output
    f = open("output-"+str(i)+".js", "w")
    f.write(output)
    f.close()

f = open("final_output.js", "w")
f.write(final_output)
f.close()



glossary_output = 'const complete_glossay = [\n'
for unique_var in global_uniques:
    glossary_output = glossary_output + unique_var + ",\n"
glossary_output = glossary_output + '\n];'

f2 = open("generated_glossary.js", "w")
f2.write(glossary_output)
f2.close()






