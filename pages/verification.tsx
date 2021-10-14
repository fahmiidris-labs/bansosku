import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"
import Label from "@/components/small/Label"

import { NextPageWithLayout } from "@/types/app.type"
import { VerificationType } from "@/types/verification.type"

const schema = yup.object({
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
        .required("Nomor RT tidak boleh kosong")
        .max(255, "Tidak lebih dari 255 karakter"),
    rt: yup.string().required("Nomor RT tidak boleh kosong"),
    rw: yup.string().required("Nomor RW tidak boleh kosong"),
    income_before: yup.number()
        .typeError("Pendapatan sebelum pandemi tidak boleh kosong")
        .required("Pendapatan sebelum pandemi tidak boleh kosong"),
    income_after: yup.number()
        .typeError("Pendapatan setelah pandemi tidak boleh kosong")
        .required("Pendapatan setelah pandemi tidak boleh kosong"),
}).required()

const Verification: NextPageWithLayout = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<VerificationType>({
        resolver: yupResolver(schema)
    })

    const onSubmitHandle: SubmitHandler<VerificationType> = data => console.log(data)

    return (
        <Main title="Verifikasi" className="container">
            <div className="my-24">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Form Verifikasi</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Mohon di isi dengan benar dan sesuai dengan data asli nya.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit(onSubmitHandle)}>
                            <div className="overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 bg-gray-50 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-6">
                                            <Label htmlFor="name" value="Nama Lengkap Sesuai KTP" />
                                            <input type="text" {...register("name")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.name && errors.name.message && (
                                                <small className="text-red-500">{errors.name.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="nik" value="Nomor NIK" />
                                            <input type="number" {...register("nik")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.nik && errors.nik.message && (
                                                <small className="text-red-500">{errors.nik.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="kk" value="Nomor KK" />
                                            <input type="number" {...register("kk")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.kk && errors.kk.message && (
                                                <small className="text-red-500">{errors.kk.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="age" value="Umur" />
                                            <input type="number" {...register("age")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.age && errors.age.message && (
                                                <small className="text-red-500">{errors.age.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="gender" value="Jenis Kelamin" />
                                            <select {...register("gender")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                <option value="">Pilih Jenis Kelamin</option>
                                                <option value="L">Laki - laki</option>
                                                <option value="P">Perempuan</option>
                                            </select>
                                            {errors.gender && errors.gender.message && (
                                                <small className="text-red-500">{errors.gender.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <Label htmlFor="address" value="Alamat Rumah" />
                                            <textarea {...register("address")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.address && errors.address.message && (
                                                <small className="text-red-500">{errors.address.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="rt" value="Nomor RT" />
                                            <input type="text" {...register("rt")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.rt && errors.rt.message && (
                                                <small className="text-red-500">{errors.rt.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="rw" value="Nomor RW" />
                                            <input type="text" {...register("rw")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.rw && errors.rw.message && (
                                                <small className="text-red-500">{errors.rw.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="income_before" value="Pendapatan Sebelum Pandemi" />
                                            <input type="number" {...register("income_before")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.income_before && errors.income_before.message && (
                                                <small className="text-red-500">{errors.income_before.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="income_after" value="Pendapatan Setelah Pandemi" />
                                            <input type="number" {...register("income_after")} className="mt-1 focus:ring-blue focus:border-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {errors.income_after && errors.income_after.message && (
                                                <small className="text-red-500">{errors.income_after.message}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center items-center font-lato text-sm bg-blue text-white py-2 px-4 rounded-lg hover:ring-2 dark:hover:ring-offset-gray-700 hover:ring-offset-2 hover:ring-yellow ease-in-out duration-150">
                                        Verifikasi
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Main>
    )
}

Verification.getLayout = getAppLayout

export default Verification
