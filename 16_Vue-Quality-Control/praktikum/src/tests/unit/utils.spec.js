import {
    penjumlahan,
    pengurangan,
    pembagian,
    perkalian,
    rataRata,
    sisaBagi,
    luasPersegi,
    luasLingkaran,
    luasKubus,
    volumeKubus} from "@/utils";

describe("Tes Penjumlahan", () => {
    it("Lakukan penjumlahan bilangan positif", () => {
        expect(penjumlahan(2, 4)).toBe(6);
    });
    it("Lakukan penjumlahan bilangan positif dan negatif", () => {
        expect(penjumlahan(2, -4)).toBe(-2);
    });
    it("Lakukan penjumlahan bilangan positif dan negatif", () => {
        expect(penjumlahan(5, -4)).toBe(1);
    });
});

describe("Tes Pengurangan", () => {
    it("Pengurangan bilangan positif", () => {
        expect(pengurangan(25, 5)).toBe(20);
    });
    it("Pengurangan bilangan negatif", () => {
        expect(pengurangan(-10, -9)).toBe(-1);
    });
    it("Pengurangan dengan null", () => {
        expect(pengurangan(-13, null)).toBe(-13);
    });
})

describe("Tes Pembagian", () => {
    it("Pembagian bilangan positif", () => {
        expect(pembagian(25, 5)).toBe(5);
    });
    it("Pembagian bilangan negatif", () => {
        expect(pembagian(-21, -7)).toBe(3);
    });
    it("Pembagian bilangan positif dengan negatif", () => {
        expect(pembagian(63, 9)).toBe(7);
    });
})

describe("Tes Perkalian", () => {
    it("Perkalian bilangan positif", () => {
        expect(perkalian(5, 6)).toBe(30);
    });
    it("Perkalian bilangan negatif", () => {
        expect(perkalian(72, 6)).toBe(432);
    });
    it("Perkalian dengan null", () => {
        expect(perkalian(17, null)).toBe(0);
    });
})

describe("Tes rataRata", () => {
    it("rataRata 1", () => {
        expect(rataRata(1, 2, 3, 4, 5)).toBe(2);
    });
    it("rataRata 2", () => {
        expect(rataRata(11, 12, 13, 14, 5)).toBe(10);
    });
    it("rataRata 3", () => {
        expect(rataRata(21, 22, 23, 24, 5)).toBe(18);
    });
})

describe("Tes sisaBagi", () => {
    it("sisaBagi 1", () => {
        expect(sisaBagi(3, 2)).toBe(1);
    });
    it("sisaBagi 2", () => {
        expect(sisaBagi(5, 5)).toBe(0);
    });
    it("sisaBagi 3", () => {
        expect(sisaBagi(19, 2)).toBe(1);
    });
})

describe("Tes LuasPersegi", () => {
    it("luasPersegi 1", () => {
        expect(luasPersegi(2, 2)).toBe(4);
    });
    it("luasPersegi 2", () => {
        expect(luasPersegi(16, 16)).toBe(256);
    });
    it("luasPersegi 3", () => {
        expect(luasPersegi(9, 9)).toBe(81);
    });
})

describe("Tes luasLingkaran", () => {
    it("luasLingkaran 1", () => {
        expect(luasLingkaran(7, 7)).toBe(153.86);
    });
    it("luasLingkaran 2", () => {
        expect(luasLingkaran(10, 10)).toBe(314);
    });
    it("luasLingkaran 3", () => {
        expect(luasLingkaran(5, 5)).toBe(78.5);
    });
})

describe("Tes luasKubus", () => {
    it("luasKubus 1", () => {
        expect(luasKubus(11, 11, 6)).toBe(726);
    });
    it("luasKubus 2", () => {
        expect(luasKubus(6, 6, 6)).toBe(216);
    });
    it("luasKubus 3", () => {
        expect(luasKubus(2, 2, 6)).toBe(24);
    });
})

describe("Tes volumeKubus", () => {
    it("volumeKubus 1", () => {
        expect(volumeKubus(3, 3, 3)).toBe(27);
    });
    it("volumeKubus 2", () => {
        expect(volumeKubus(21, 21, 21)).toBe(9261);
    });
    it("volumeKubus 1", () => {
        expect(volumeKubus(7, 7, 7)).toBe(343);
    });
})