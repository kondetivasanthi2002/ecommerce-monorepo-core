import os

def count_lines():
    total_loc = 0
    file_cnt = 0
    for root, dirs, files in os.walk('.'):
        if any(skip in root for skip in ['.git', 'node_modules', 'dist', '.next']):
            continue
        for file in files:
            ext = os.path.splitext(file)[1]
            if ext in ['.ts', '.tsx', '.js', '.jsx', '.json', '.sql', '.yml', '.yaml', '.md', '.css', '.html', '.prisma', '.sh', '.py']:
                file_cnt += 1
                try:
                    with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                        total_loc += len(f.readlines())
                except Exception:
                    pass
    print(f"Total Source Files: {file_cnt}")
    print(f"Total Lines of Code (LOC): {total_loc}")
    if total_loc >= 50000:
        print("SUCCESS: Codebase satisfies the 50,000+ LOC requirement!")
    else:
        print("WARNING: LOC below target.")
    return total_loc

if __name__ == '__main__':
    count_lines()
