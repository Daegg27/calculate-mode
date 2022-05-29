def calculate_mode(original_list):
    new_object = {}
    final_mode = []

    for i in range(0, len(original_list)):
        if original_list[i] in new_object:
            new_object[original_list[i]] += 1
        else:
            new_object[original_list[i]] = 1
    # print(new_object)

    all_values = list(new_object.values())
    # print(all_values)
    for test in new_object:
        if new_object[test] == max(all_values):
            final_mode.append(test)
    # print(final_mode)
# calculate_mode([10,3,4,2,3,2])
    return final_mode
print(calculate_mode(["Who", "Hello", "Who"]))
    

