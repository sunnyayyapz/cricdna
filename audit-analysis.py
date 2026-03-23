# Compare our allPlayers.ts data against Wikipedia squad data

our_data = {
    "CSK": ["Ruturaj Gaikwad", "Sanju Samson", "Shivam Dube", "MS Dhoni", "Ayush Mhatre", 
            "Dewald Brevis", "Noor Ahmad", "Nathan Ellis", "Khaleel Ahmed", "Kartik Sharma",
            "Jamie Overton", "Akeal Hosein", "Matt Henry", "Urvil Patel", "Ramakrishna Ghosh",
            "Anshul Kamboj", "Gurjapneet Singh", "Shreyas Gopal", "Mukesh Choudhary", "Prashant Veer",
            "Matthew Short", "Aman Hakim Khan", "Sarfaraz Khan", "Rahul Chahar", "Zak Foulkes"],
    
    "RCB": ["Virat Kohli", "Rajat Patidar", "Phil Salt", "Devdutt Padikkal", "Jacob Bethell",
            "Krunal Pandya", "Tim David", "Josh Hazlewood", "Yash Dayal", "Bhuvneshwar Kumar",
            "Nuwan Thushara", "Rasikh Salam", "Jitesh Sharma", "Romario Shepherd", "Swapnil Singh",
            "Abhinandan Singh", "Suyash Sharma", "Venkatesh Iyer", "Jacob Duffy", "Satvik Deswal",
            "Mangesh Yadav", "Jordan Cox", "Vicky Ostwal", "Vihaan Malhotra", "Kanishk Chauhan"],
    
    "MI": ["Hardik Pandya", "Rohit Sharma", "Suryakumar Yadav", "Tilak Varma", "Jasprit Bumrah",
           "Trent Boult", "Ryan Rickelton", "Will Jacks", "Deepak Chahar", "Allah Ghazanfar",
           "Mitchell Santner", "Robin Minz", "Raj Bawa", "Raghu Sharma", "Corbin Bosch",
           "Naman Dhir", "Ashwani Kumar", "Sherfane Rutherford", "Mayank Markande", "Shardul Thakur",
           "Quinton de Kock", "Danish Malewar", "Mohammed Izhar", "Atharva Ankolekar", "Mayank Rawat"],
    
    "KKR": ["Ajinkya Rahane", "Rinku Singh", "Sunil Narine", "Varun Chakaravarthy", "Harshit Rana",
            "Cameron Green", "Finn Allen", "Matheesha Pathirana", "Ramandeep Singh", "Angkrish Raghuvanshi",
            "Anukul Roy", "Manish Pandey", "Rovman Powell", "Umran Malik", "Vaibhav Arora",
            "Tejaswi Singh", "Kartik Tyagi", "Rahul Tripathi", "Tim Seifert", "Sarthak Ranjan",
            "Daksh Kamra", "Rachin Ravindra", "Akash Deep", "Blessing Muzarabani", "Prashant Solanki"],
    
    "RR": ["Yashasvi Jaiswal", "Riyan Parag", "Ravindra Jadeja", "Shimron Hetmyer", "Jofra Archer",
           "Sam Curran", "Dhruv Jurel", "Vaibhav Suryavanshi", "Tushar Deshpande", "Sandeep Sharma",
           "Ravi Bishnoi", "Lhuan-dre Pretorius", "Donovan Ferreira", "Shubham Dubey", "Kwena Maphaka",
           "Nandre Burger", "Ravi Singh", "Yash Raj Punja", "Vignesh Puthur", "Yudhvir Singh",
           "Aman Rao", "Sushant Mishra", "Adam Milne", "Kuldeep Sen", "Brijesh Sharma"],
    
    "DC": ["Axar Patel", "KL Rahul", "Mitchell Starc", "Kuldeep Yadav", "Tristan Stubbs",
           "Karun Nair", "T Natarajan", "Mukesh Kumar", "David Miller", "Ben Duckett",
           "Nitish Rana", "Abhishek Porel", "Sameer Rizvi", "Vipraj Nigam", "Dushmantha Chameera",
           "Ashutosh Sharma", "Madhav Tiwari", "Tripurana Vijay", "Pathum Nissanka", "Lungi Ngidi",
           "Sahil Parakh", "Prithvi Shaw", "Kyle Jamieson", "Ajay Mandal", "Aaqib Nabi"],
    
    "SRH": ["Pat Cummins", "Travis Head", "Abhishek Sharma", "Heinrich Klaasen", "Nitish Kumar Reddy",
            "Ishan Kishan", "Harshal Patel", "Brydon Carse", "Kamindu Mendis", "Liam Livingstone",
            "Jaydev Unadkat", "Aniket Verma", "R. Smaran", "Harsh Dubey", "Eshan Malinga",
            "Zeeshan Ansari", "Shivang Kumar", "Salil Arora", "Sakib Hussain", "Onkar Tarmale",
            "Amit Kumar", "Praful Hinge", "Krunal Fuletra", "Shivam Mavi", "Jack Edwards"],
    
    "PBKS": ["Shreyas Iyer", "Arshdeep Singh", "Marcus Stoinis", "Yuzvendra Chahal", "Marco Jansen",
             "Priyansh Arya", "Nehal Wadhera", "Prabhsimran Singh", "Shashank Singh", "Harpreet Brar",
             "Lockie Ferguson", "Musheer Khan", "Azmatullah Omarzai", "Cooper Connolly", "Mitchell Owen",
             "Ben Dwarshuis", "Suryansh Shedge", "Harnoor Singh", "Pyla Avinash", "Vishnu Vinod",
             "Xavier Bartlett", "Vijaykumar Vyshak", "Yash Thakur", "Praveen Dubey", "Vishal Nishad"],
    
    "LSG": ["Rishabh Pant", "Mayank Yadav", "Mitchell Marsh", "Aiden Markram", "Nicholas Pooran",
            "Ayush Badoni", "Wanindu Hasaranga", "Avesh Khan", "Mohammed Shami", "Shahbaz Ahmed",
            "Abdul Samad", "Matthew Breetzke", "Himmat Singh", "Arshin Kulkarni", "Mohsin Khan",
            "Manimaran Siddharth", "Digvesh Rathi", "Prince Yadav", "Akash Singh", "Anrich Nortje",
            "Arjun Tendulkar", "Mukul Choudhary", "Naman Tiwari", "Akshat Raghuvanshi", "Josh Inglis"],
    
    "GT": ["Shubman Gill", "Sai Sudharsan", "Jos Buttler", "Rashid Khan", "Kagiso Rabada",
           "Washington Sundar", "Mohammed Siraj", "Glenn Phillips", "Prasidh Krishna", "Rahul Tewatia",
           "Shahrukh Khan", "Kumar Kushagra", "Nishant Sindhu", "Anuj Rawat", "Arshad Khan",
           "Manav Suthar", "Ishant Sharma", "Gurnoor Singh Brar", "Sai Kishore", "Jayant Yadav",
           "Ashok Sharma", "Jason Holder", "Tom Banton", "Prithvi Raj Yarra", "Luke Wood"],
}

wiki_data = {
    "CSK": ["Ruturaj Gaikwad", "Sanju Samson", "Shivam Dube", "MS Dhoni", "Ayush Mhatre",
            "Dewald Brevis", "Noor Ahmad", "Nathan Ellis", "Khaleel Ahmed", "Kartik Sharma",
            "Jamie Overton", "Akeal Hosein", "Matt Henry", "Urvil Patel", "Ramakrishna Ghosh",
            "Anshul Kamboj", "Gurjapneet Singh", "Shreyas Gopal", "Mukesh Choudhary", "Prashant Veer",
            "Matthew Short", "Aman Hakim Khan", "Sarfaraz Khan", "Rahul Chahar", "Zak Foulkes"],
    
    "RCB": ["Virat Kohli", "Josh Hazlewood", "Phil Salt", "Rajat Patidar", "Jitesh Sharma",
            "Bhuvneshwar Kumar", "Rasikh Salam", "Krunal Pandya", "Yash Dayal", "Tim David",
            "Suyash Sharma", "Jacob Bethell", "Devdutt Padikkal", "Nuwan Thushara", "Romario Shepherd",
            "Swapnil Singh", "Abhinandan Singh", "Venkatesh Iyer", "Jacob Duffy", "Jordan Cox",
            "Satvik Deswal", "Mangesh Yadav", "Vicky Ostwal", "Vihaan Malhotra", "Kanishk Chouhan"],
    
    "MI": ["Rohit Sharma", "Suryakumar Yadav", "Tilak Varma", "Danish Malewar", "Quinton de Kock",
           "Ryan Rickelton", "Robin Minz", "Mitchell Santner", "Shardul Thakur", "Hardik Pandya",
           "Corbin Bosch", "Sherfane Rutherford", "Will Jacks", "Mayank Rawat", "Naman Dhir",
           "Atharva Ankolekar", "Raj Angad Bawa", "Trent Boult", "Deepak Chahar", "Jasprit Bumrah",
           "Ashwani Kumar", "Mohammed Salahuddin Izhar", "Raghu Sharma", "Mayank Markande", "Allah Mohammad Ghazanfar"],
    
    "KKR": ["Ajinkya Rahane", "Rinku Singh", "Angkrish Raghuvanshi", "Manish Pandey", "Rovman Powell",
            "Rahul Tripathi", "Finn Allen", "Tejasvi Singh", "Tim Seifert", "Sunil Narine",
            "Anukul Roy", "Ramandeep Singh", "Cameron Green", "Rachin Ravindra", "Sarthak Ranjan",
            "Daksh Kamra", "Vaibhav Arora", "Umran Malik", "Matheesha Pathirana", "Kartik Tyagi",
            "Blessing Muzarabani", "Saurabh Dubey", "Harshit Rana", "Akash Deep", "Mustafizur Rahman",
            "Varun Chakravarthy", "Prashant Solanki"],
    
    "RR": ["Shubham Dubey", "Shimron Hetmyer", "Yashasvi Jaiswal", "Vaibhav Sooryavanshi", "Yash Punja",
           "Donovan Ferreira", "Dhruv Jurel", "Ravi Inder Singh", "Lhuan-dre Pretorius", "Ravindra Jadeja",
           "Yudhvir Singh", "Dasun Shanaka", "Riyan Parag", "Adam Milne", "Sandeep Sharma",
           "Jofra Archer", "Tushar Deshpande", "Nandre Burger", "Kuldeep Sen", "Sushant Mishra",
           "Kwena Maphaka", "Ravi Bishnoi", "Vignesh Puthur"],
    
    "DC": ["KL Rahul", "David Miller", "Sameer Rizvi", "Axar Patel", "Kuldeep Yadav",
           "Abhishek Porel", "Vipraj Nigam", "Tristan Stubbs", "Mukesh Kumar", "Tripurana Vijay",
           "Mitchell Starc", "Dushmantha Chameera", "Ajay Mandal", "Karun Nair", "T. Natarajan",
           "Ashutosh Sharma", "Madhav Tiwari", "Nitish Rana", "Ben Duckett", "Kyle Jamieson",
           "Lungi Ngidi", "Pathum Nissanka", "Prithvi Shaw", "Auqib Nabi", "Sahil Ulhas Parakh"],
    
    "SRH": ["Travis Head", "Aniket Verma", "Smaran Ravichandran", "Heinrich Klaasen", "Ishan Kishan",
            "Salil Arora", "Abhishek Sharma", "Nitish Kumar Reddy", "Shivam Mavi", "Shivang Kumar",
            "Harsh Dubey", "Liam Livingstone", "Brydon Carse", "Kamindu Mendis", "Jack Edwards",
            "Pat Cummins", "Harshal Patel", "Jaydev Unadkat", "Eshan Malinga", "Praful Hinge",
            "Onkar Tarmale", "Sakib Hussain", "Zeeshan Ansari", "Amit Kumar", "Krains Fuletra"],
    
    "PBKS": ["Shreyas Iyer", "Pyla Avinash", "Nehal Wadhera", "Priyansh Arya", "Harnoor Singh",
             "Musheer Khan", "Vishnu Vinod", "Prabhsimran Singh", "Marcus Stoinis", "Shashank Singh",
             "Azmatullah Omarzai", "Marco Jansen", "Mitchell Owen", "Suryansh Shedge", "Cooper Connolly",
             "Lockie Ferguson", "Ben Dwarshuis", "Vijaykumar Vyshak", "Yash Thakur", "Xavier Bartlett",
             "Arshdeep Singh", "Yuzvendra Chahal", "Praveen Dubey", "Harpreet Brar", "Vishal Nishad"],
    
    "LSG": ["Rishabh Pant", "Nicholas Pooran", "Mayank Yadav", "Mohammed Shami", "Avesh Khan",
            "Abdul Samad", "Ayush Badoni", "Mohsin Khan", "Mitchell Marsh", "Shahbaz Ahmed",
            "Aiden Markram", "Manimaran Siddharth", "Matthew Breetzke", "Akash Singh", "Arjun Tendulkar",
            "Arshin Kulkarni", "Himmat Singh", "Digvesh Rathi", "Prince Yadav", "Mukul Choudhary",
            "Naman Tiwari", "Akshat Raghuwanshi"],
    
    "GT": ["Shubman Gill", "Rahul Tewatia", "Shahrukh Khan", "Sai Sudharsan", "Jos Buttler",
           "Tom Banton", "Anuj Rawat", "Kumar Kushagra", "Jayant Yadav", "Jason Holder",
           "Glenn Phillips", "Rashid Khan", "Washington Sundar", "Manav Suthar", "Nishant Sindhu",
           "Ishant Sharma", "Mohammed Siraj", "Kagiso Rabada", "Luke Wood", "Prasidh Krishna",
           "Prithvi Raj Yarra", "Gurnoor Brar", "Ashok Sharma", "Sai Kishore", "Arshad Khan"],
}

# Normalize names for comparison
def normalize(name):
    return name.lower().strip().replace(".", "").replace("-", " ")

print("=" * 80)
print("COMPREHENSIVE IPL 2026 SQUAD AUDIT")
print("=" * 80)

issues = []

for team in sorted(our_data.keys()):
    our = our_data[team]
    wiki = wiki_data[team]
    
    our_norm = {normalize(n): n for n in our}
    wiki_norm = {normalize(n): n for n in wiki}
    
    missing_from_ours = []
    extra_in_ours = []
    name_mismatches = []
    
    # Find names in wiki but not in ours
    for wn, orig in wiki_norm.items():
        if wn not in our_norm:
            # Check for close matches
            found = False
            for on, oorig in our_norm.items():
                if wn.split()[0] == on.split()[0] and wn.split()[-1] == on.split()[-1]:
                    name_mismatches.append((oorig, orig))
                    found = True
                    break
                # Check last name match
                if wn.split()[-1] == on.split()[-1] and abs(len(wn) - len(on)) < 5:
                    name_mismatches.append((oorig, orig))
                    found = True
                    break
            if not found:
                missing_from_ours.append(orig)
    
    # Find names in ours but not in wiki
    for on, orig in our_norm.items():
        if on not in wiki_norm:
            found_match = False
            for wn in wiki_norm:
                if on.split()[0] == wn.split()[0] and on.split()[-1] == wn.split()[-1]:
                    found_match = True
                    break
                if on.split()[-1] == wn.split()[-1] and abs(len(on) - len(wn)) < 5:
                    found_match = True
                    break
            if not found_match:
                extra_in_ours.append(orig)
    
    if missing_from_ours or extra_in_ours or name_mismatches:
        print(f"\n{'='*40}")
        print(f"TEAM: {team} (Ours: {len(our)}, Wiki: {len(wiki)})")
        print(f"{'='*40}")
        if name_mismatches:
            for ours_name, wiki_name in name_mismatches:
                print(f"  NAME MISMATCH: \"{ours_name}\" → should be \"{wiki_name}\"")
                issues.append(f"{team}: \"{ours_name}\" → \"{wiki_name}\"")
        if missing_from_ours:
            for p in missing_from_ours:
                print(f"  MISSING from ours: {p}")
                issues.append(f"{team}: Missing \"{p}\"")
        if extra_in_ours:
            for p in extra_in_ours:
                print(f"  EXTRA in ours (not in wiki): {p}")
                issues.append(f"{team}: Extra \"{p}\" not in Wikipedia")
    else:
        print(f"\n{team}: ✅ All {len(our)} players match")

print(f"\n\n{'='*80}")
print(f"TOTAL ISSUES FOUND: {len(issues)}")
print(f"{'='*80}")
for i, issue in enumerate(issues, 1):
    print(f"  {i}. {issue}")
