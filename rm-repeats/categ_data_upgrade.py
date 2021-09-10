f = open("../catg.js", "r")
all_data = f.read()
f.close()
entries = all_data.split(";\n")

output=""

for entry in entries:
    lines = entry.split("\n")
    thing = lines[0].split(" ")
    if len(thing) > 1:
        var_name = thing[1]
        # print(var_name)

    local_output = var_name + " = {\n"
    local_output = local_output + "\tcode: \"\",\n"
    local_output = local_output + "\tcontents: [\n"
    
    for i in range(1, len(lines)):
        local_output = local_output + "\t" + lines[i]
    
    local_output = local_output + "};\n"

    output = output + local_output


f = open("new_categs.js", "w")
f.write(output)
f.close()
