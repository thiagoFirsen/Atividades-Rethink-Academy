const client = {
  code: 16532,
  name: "Ana",
  vip: true,
  addres: {
    logger: "Rua ABC",
    number: 12,
    complement: "Apto 101 Bloco B",
  },
  pointsRef: [
    { nameRef: "Hospital X", near: true },
    { nameRef: "Shoping Y", near: false },
  ],
  nameSons: ["Bia", "Carlos", "Gabriel"],
};

console.log(client.addres.logger);
console.log(client.pointsRef[0].near);
