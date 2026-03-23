# IPL 2026 Squad Research Context

## Verified CSK Squad (from Wikipedia - authoritative)
1. Ruturaj Gaikwad (C) - Batter - India - ₹18 crore
2. Sanju Samson - WK-Batter - India - ₹18 crore (Traded from RR)
3. Shivam Dube - All-Rounder - India - ₹12 crore
4. MS Dhoni - WK-Batter - India - ₹4 crore
5. Noor Ahmad - Bowler - Afghanistan - ₹10 crore (Overseas)
6. Khaleel Ahmed - Bowler - India - ₹4.8 crore
7. Ayush Mhatre - Batter - India - ₹30 lakh
8. Dewald Brevis - Batter - South Africa - ₹2.2 crore (Overseas)
9. Ramakrishna Ghosh - All-Rounder - India - ₹30 lakh
10. Jamie Overton - All-Rounder - England - ₹1.5 crore (Overseas)
11. Nathan Ellis - Bowler - Australia - ₹2 crore (Overseas, Withdrawn)
12. Anshul Kamboj - All-Rounder - India - ₹3.4 crore
13. Gurjapneet Singh - Bowler - India - ₹2.2 crore
14. Shreyas Gopal - Bowler - India - ₹30 lakh
15. Mukesh Choudhary - Bowler - India - ₹30 lakh
16. Urvil Patel - WK-Batter - India - ₹30 lakh
17. Akeal Hosein - All-Rounder - West Indies - ₹2 crore (Overseas)
18. Prashant Veer - All-Rounder - India - ₹14.2 crore (NEW - joint most expensive uncapped)
19. Kartik Sharma - WK-Batter - India - ₹14.2 crore (NEW - joint most expensive uncapped)
20. Matthew Short - All-Rounder - Australia - ₹1.5 crore (Overseas)
21. Aman Hakim Khan - All-Rounder - India - ₹40 lakh
22. Sarfaraz Khan - Batter - India - ₹75 lakh
23. Matt Henry - Bowler - New Zealand - ₹2 crore (Overseas)
24. Rahul Chahar - Bowler - India - ₹5.2 crore
25. Zak Foulkes - Bowler - New Zealand - ₹75 lakh (Overseas)

## Issues found in current allPlayers.ts for CSK:
- "Prashant Solanki" is WRONG - should be "Prashant Veer" (₹14.2 crore uncapped star)
- "Kartik Sharma" name is correct (confirmed)
- "Zakary Foulkes" should be "Zak Foulkes"
- "Aman Khan" should be "Aman Hakim Khan" (minor)

## Other teams verified from News24 (March 18, 2026) - matches current allPlayers.ts:
- RCB: 25 players - MATCHES
- KKR: 25 players - MATCHES (Prashant Solanki correctly at KKR)
- MI: 25 players - MATCHES
- SRH: 25 players - MATCHES
- PBKS: 25 players - "Harnoor Pannu" in News24 vs "Harnoor Singh" in our data (minor)
- LSG: 25 players - MATCHES
- RR: 25 players - "Kyle Jamieson" in News24 vs not in our data / "Adam Milne" in our data
- DC: 25 players - "Kyle Jamieson" in both DC and RR in News24... but our data has 25 for DC
- GT: 25 players - MATCHES

## Key fixes needed:
1. CSK: Replace "Prashant Solanki" with "Prashant Veer" (All-Rounder, India, Left-hand bat, Left-arm orthodox, uncapped, NOT probable XI initially but key squad member, ₹14.2 crore)
2. CSK: "Zakary Foulkes" → "Zak Foulkes"  
3. CSK: "Aman Khan" → "Aman Hakim Khan"
4. RR: Check if "Adam Milne" should be "Kyle Jamieson" (News24 source)
