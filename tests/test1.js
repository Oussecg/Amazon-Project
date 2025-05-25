function getVipEmails(users) {
    let emails = [];
    let vipUser;
    // Keep finding and removing VIPs until none left
    while (vipUser = users.find(user => user.isVip)) {
        emails.push(vipUser.email);
        const index = users.indexOf(vipUser);
        users.splice(index, 1);
    }
    return emails;
}

const users = [
    { id: 1, name: 'Lina', email: 'lina@mail.com', isVip: false },
    { id: 2, name: 'Omar', email: 'omar@mail.com', isVip: true },
    { id: 3, name: 'Sara', email: 'sara@mail.com', isVip: true },
    { id: 4, name: 'Ali', email: 'ali@mail.com', isVip: false }
];

console.log(getVipEmails(users));  // ['omar@mail.com', 'sara@mail.com']
console.log(users);  // Remaining users without VIPs
