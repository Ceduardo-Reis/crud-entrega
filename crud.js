let postos = [];
        let editingPostoIndex = -1;

        function openModal(index = -1) {
            document.getElementById('postoForm').reset();
            editingPostoIndex = index;
            if (index >= 0) {
                document.getElementById('modalTitle').innerText = "Editar Posto";
                const posto = postos[index];
                document.getElementById('postoId').value = posto.id;
                document.getElementById('nome').value = posto.nome;
                document.getElementById('categoria').value = posto.categoria;
                document.getElementById('tipo').value = posto.tipo;
                document.getElementById('prioridade').value = posto.prioridade;
                document.getElementById('atuacao').value = posto.atuacao;
                document.getElementById('efetivo').value = posto.efetivo;
            } else {
                document.getElementById('modalTitle').innerText = "Criar Posto";
            }
            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }

        function savePosto() {
            const id = document.getElementById('postoId').value;
            const nome = document.getElementById('nome').value;
            const categoria = document.getElementById('categoria').value;
            const tipo = document.getElementById('tipo').value;
            const prioridade = document.getElementById('prioridade').value;
            const atuacao = document.getElementById('atuacao').value;
            const efetivo = document.getElementById('efetivo').value;

            const posto = { id, nome, categoria, tipo, prioridade, atuacao, efetivo };

            if (editingPostoIndex >= 0) {
                postos[editingPostoIndex] = posto;
                editingPostoIndex = -1;
            } else {
                posto.id = postos.length + 1;
                postos.push(posto);
            }
            closeModal();
            renderTable();
        }

        function renderTable() {
            const tbody = document.getElementById('postoTableBody');
            tbody.innerHTML = '';
            postos.forEach((posto, index) => {
                const row = `<tr>
                    <td>${posto.id}</td>
                    <td>${posto.nome}</td>
                    <td>${posto.categoria}</td>
                    <td>${posto.tipo}</td>
                    <td>${posto.prioridade}</td>
                    <td>${posto.atuacao}</td>
                    <td>${posto.efetivo}</td>
                    <td class="editar"><button onclick="openModal(${index})"><img src="img2.png" alt="Editar"></button></td>
                    <td class="escalar"><button><img src="img1.png" alt="Escalar"></button></td>
                    <td class="excluir"><button onclick="deletePosto(${index})"><img src="lixo.png" alt="Excluir"></button></td>
                </tr>`;
                tbody.innerHTML += row;
            });
        }

        function deletePosto(index) {
            postos.splice(index, 1);
            renderTable();
        }

        window.onclick = function(event) {
            const modal = document.getElementById('myModal');
            if (event.target == modal) {
                closeModal();
            }
        }
    



/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crudForm');
    const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
    const message = document.getElementById('message');
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const renderUsers = () => {
        usersTable.innerHTML = '';
        users.forEach((user, index) => {
            const row = usersTable.insertRow();
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td class="actions">
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
        });
    };

    const resetForm = () => {
        form.reset();
        document.getElementById('userId').value = '';
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userId = document.getElementById('userId').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (userId) {
            users[userId] = { name, email };
            message.innerText = 'User updated successfully!';
        } else {
            users.push({ name, email });
            message.innerText = 'User added successfully!';
        }

        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
        resetForm();
    });

    window.editUser = (index) => {
        const user = users[index];
        document.getElementById('userId').value = index;
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
    };

    window.deleteUser = (index) => {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
        message.innerText = 'User deleted successfully!';
    };

    renderUsers();
});*/
