# RESTFUL NODEJS API (SECURE GATE SYSTEM)

# ENDPOINT API

### User
- POST /users  - Add user
    > curl -d "nrp=[nrp]&password[password]&grup=[grup_id]"  -X POST http://localhost:3000/users
- GET /users  - Get all users
    > curl http://localhost:3000/users
- GET /users/:userid - Get info user
    > curl http://localhost:3000/users/[id_user]
- DELETE /users/:userid - Delete user
    > curl -X DELETE http://localhost:3000/users/[id_user]

### Gate
- POST /gate  - add gate
    > curl -d "name=[nama_gate]" -X POST http://localhost:3000/gate
- GET /gate  - get all gates
    > curl http://localhost:3000/gate
- GET /gate/:gateid - get info gate
    > curl http://localhost:3000/gate/[id_gate]
- DELETE /gate/:gateid - delete gate
    > curl -X DELETE http://localhost:3000/gate/[id_gate]

### Group
- POST /group -add group
    > curl -d "name=[nama_group]&jadwal=[id_jadwal]" -X POST http://localhost:3000/group
- GET /group - get all group
    > curl http://localhost:3000/group
- GET /group/:id_group - get info group
    > curl httl://localhost:3000/group/[id_group]
- DELETE /group/:id_group -delete group
    > curl -X DELETE http://localhost:3000/group/[id_group]
    
### Jadwal

- POST /jadwal  - add jadwal
    > curl -d "open=[open]&close=[close]&gate=[gate_id]" -X POST http://localhost:3000/jadwal
- GET /jadwal  - get all jadwal
    > curl http://localhost:3000/jadwal
- GET /jadwal/:jadwalid - get info jadwal
    > curl http://localhost:3000/jadwal/[id_jadwal]
- DELETE /jadwal/:jadwalid - delete jadwal
    > curl -X DELETE http://localhost:3000/jadwal/[id_jadwal]

### Auth-login
- POST /login  - login
    > curl -d "nrp=[nrp]&password=[password]&gate=[gate_id]" -X POST http://localhost:3000/login
