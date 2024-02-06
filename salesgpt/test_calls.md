curl --location 'http://127.0.0.1:8000/chat' \
--header 'Content-Type: application/json' \
--data '{
    "human_say": "Hello",
    "conversation_history": [
    ]
}'

{"name":"Rishab","say":" Hey, good morning! My name is Rishab, and I'm calling from Axelerant, a digital experience design and development partner. We help businesses create exceptional digital experiences for clients using the latest technology. How are you? <END_OF_TURN>"}%    

curl --location 'http://127.0.0.1:8000/chat' \
--header 'Content-Type: application/json' \
--data '{
    "human_say": "Good and you",
    "conversation_history": [
        "User: Hello <END_OF_TURN>",
        "Rishab: Hey, good morning! My name is Rishab, and I'\''m calling from Axelerant, a digital experience design and development partner. We help businesses create exceptional digital experiences for clients using the latest technology. How are you?<END_OF_TURN>"
    ]
}'
{"name":"Rishab","say":" Great to hear! I'm reaching out today to understand if your organization is looking to enhance its digital experiences through software solutions. Can you please tell me who I should be speaking with regarding this matter?<END_OF_TURN>"}%  
