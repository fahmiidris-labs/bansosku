import * as yup from "yup"

const FILE_SIZE = 2000000;
    const SUPPORTED_FORMATS = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/bmp"
    ];

export const schema = yup.object({
    name: yup.string().required("Nama tidak boleh kosong"),
    nik: yup.number()
        .typeError("Nomor NIK tidak boleh kosong")
        .required("Nomor NIK tidak boleh kosong")
        .test("len", "Nomor NIK harus 16 digit", val => val?.toString().length === 16),
    kk: yup.number()
        .typeError("Nomor KK tidak boleh kosong")
        .required("Nomor KK tidak boleh kosong")
        .test("len", "Nomor KK harus 16 digit", val => val?.toString().length === 16),
    age: yup.number()
        .typeError("Umur tidak boleh kosong")
        .required("Umur tidak boleh kosong")
        .min(25, "Minimal umur 25 tahun"),
    gender: yup.string().required("Wajib memilih jenis kelamin"),
    address: yup.string()
        .required("Alamat tidak boleh kosong")
        .max(255, "Tidak lebih dari 255 karakter"),
    rt: yup.string().required("Nomor RT tidak boleh kosong"),
    rw: yup.string().required("Nomor RW tidak boleh kosong"),
    income_before: yup.number()
        .typeError("Pendapatan sebelum pandemi tidak boleh kosong")
        .required("Pendapatan sebelum pandemi tidak boleh kosong")
        .min(0, "Pendapatan sebelum pandemi paling kecil 0"),
    income_after: yup.number()
        .typeError("Pendapatan setelah pandemi tidak boleh kosong")
        .required("Pendapatan setelah pandemi tidak boleh kosong")
        .min(0, "Pendapatan setelah pandemi paling kecil 0"),
    reason: yup.object().shape({
        label: yup.string().required("Alasan tidak boleh kosong"),
        value: yup.string().required("Alasan tidak boleh kosong")
    }).nullable(),
    img_ktp: yup.mixed()
        .nullable()
        .required("Foto KTP tidak boleh kosong")
        .test("FILE_SIZE", "Ukuran foto terlalu besar, max 2MB", value => !value || (value[0] && value[0].size <= FILE_SIZE))
        .test("FILE_FORMAT", "Format foto tidak support, pastikan format nya .jpg, .jpeg, .png, dan .bmp", value => !value || (value[0] && SUPPORTED_FORMATS.includes(value[0].type))),
    img_kk: yup.mixed()
        .nullable()
        .required("Foto KK tidak boleh kosong")
        .test("FILE_SIZE", "Ukuran foto terlalu besar, max 2MB", value => !value || (value[0] && value[0].size <= FILE_SIZE))
        .test("FILE_FORMAT", "Format foto tidak support, pastikan format nya .jpg, .jpeg, .png, dan .bmp", value => !value || (value[0] && SUPPORTED_FORMATS.includes(value[0].type))),
    agreement:yup.bool().oneOf([true], "Pernyataan belum di ceklis atau disetujui, tolong ceklis terlebih dahulu")
}).required()