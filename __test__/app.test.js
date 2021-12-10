import request from "supertest";
import { app } from "../api/app";
import { base_url } from "../config/config";

const bearer =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpjQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTYzODg2NzQyMH0.jU8-ItBl_mB1drvHSaEAnjUdyQ-HP7DRkAidBS8Hn4Y";

/* USERS */

// Primer test voy a listar a los usuarios
describe("Lista de usuarios", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/user/users`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora vamos a crear un usuario
describe("Creando usuario", () => {
  test("Metodo POST", async () => {
    const body = {
      name: "Test",
      last_name: "Test",
      email: "jc@gmail.com",
      password: "1234",
    };

    const result = await request(app)
      .post(`${base_url}/auth/signUp`)
      .send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

// Test para ver a un usuario por id
describe("Lista de usuarios", () => {
  test("Método GET", async () => {
    const result = await request(app)
      .get(`${base_url}/user/showUser/JC002`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Test de actualización de un usuario
describe("Actualizando usuario", () => {
  test("Método PUT", async () => {
    const body = {
      name: "Jorge Test",
      last_name: "Carpena Test",
      email: "test@gmail.com",
      password: "1234S"
    };
    const result = await request(app)
      .put(`${base_url}/user/updateUser/JC002`)
      .set("Authorization", bearer)
      .send(body);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Test de eliminación de un usuario
describe("Eiminando usuario", () => {
  test("Método DELETE", async () => {
    const result = await request(app)
      .delete(`${base_url}/user/deleteUser/JC002`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

/* STORIES */

// Test para listar las historias
describe("Lista de stories", () => {
  test("Método GET", async () => {
    const result = await request(app)
      .get(`${base_url}/story/storys`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Test para ver una story por id
describe("Lista de stories", () => {
  test("Método GET", async () => {
    const result = await request(app)
      .get(`${base_url}/story/readStory/Hystory111`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Test para crear una story

describe("Creando story", () => {
  test("Método POST", async () => {
    const body = {
      title: "Story3",
      author: "Jorge Carpena",
      text: "abcd abcdabcdabcdabcd abcabcdd",
      dateTime: "01-02-21",
      user_id: "JC002",
    };

    const result = await request(app)
      .post(`${base_url}/story/createStory`)
      .send(body)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Test de actualización de un story
describe("Actualizando usuario", () => {
  test("Método PUT", async () => {
    const body = {
      title: "Story1234567",
      author: "Jorge",
      text: "abcd abcdabcdabcdabcd abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
      dateTime: "01-01-21",
      user_id: "JC002"
    };
    const result = await request(app)
      .put(`${base_url}/story/updateStory/Hystory111`)
      .set("Authorization", bearer)
      .send(body);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Test de eliminación de una story
describe("Eiminando usuario", () => {
  test("Método DELETE", async () => {
    const result = await request(app)
      .delete(`${base_url}/story/deleteStory/Hystory111`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

/* COMMENTS */

// Test para listar los comentarios
describe("Listar comentarios", () => {
  test("Método GET", async () => {
    const result = await request(app)
      .get(`${base_url}/comments`);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});











