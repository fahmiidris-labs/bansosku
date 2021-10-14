export type VerificationType = {
    name: string,
    nik: string | number,
    kk: string | number,
    age: string | number,
    gender: "Laki - laki" | "Perempuan" | string,
    address: string,
    rt: string | number,
    rw: string | number,
    income_before: string | number,
    income_after: string | number,
    reason: {
        label: string,
        value: string,
    },
    img_ktp: File | null,
    img_kk: File | null,
    agreement: boolean
}