import { useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import CreatableSelect from "react-select/creatable"
import toast from "react-hot-toast"

import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"
import Label from "@/components/small/Label"

import { NextPageWithLayout } from "@/types/app.type"
import { VerificationType } from "@/types/verification.type"
import { schema } from "@/validations/verification"



const Verification: NextPageWithLayout = () => {

    const initial: VerificationType = {
        name: "",
        nik: "",
        kk: "",
        age: "",
        gender: "",
        address: "",
        rt: "",
        rw: "",
        income_before: "",
        income_after: "",
        reason: {
            label: "",
            value: "",
        } ,
        img_ktp: null,
        img_kk: null,
        agreement: false
    }

    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<VerificationType>({
        resolver: yupResolver(schema),
        defaultValues: initial
    })

    const options = [
        { value: 'Kehilangan pekerjaan', label: 'Kehilangan pekerjaan' },
        { value: 'Kepala keluarga terdampak atau korban Covid', label: 'Kepala keluarga terdampak atau korban Covid' },
        { value: 'Tergolong fakir/miskin semenjak sebelum Covid', label: 'Tergolong fakir/miskin semenjak sebelum Covid' },
    ]

    const onSubmitHandle: SubmitHandler<VerificationType> = data => {
        const normal: number = 1500
        // Dibuat besar kemungkinan error untuk simulasi
        const time: number = 1000 * (Math.random() + 1)

        setLoading(true)
        setTimeout(() => {
            if (time > normal) {
                toast.error('Ups! Sepertinya ada masalah dengan server, tolong klik verifikasi kembali.', {
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                })
                console.log(time)
                console.log("Data error karena lebih dari 1500 millisecond")
                setLoading(false)
            } else {
                toast.success('Sukses! Data sudah berhasil disimpan.', {
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                })
                // Form tidak di reset untuk memudahkan saat test.
                // reset(initial)
                console.log(time)
                console.log(data)
                setLoading(false)
            }
        }, time)

    }

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
                                        <div className="col-span-6 sm:col-span-6">
                                            <Label htmlFor="reason" value="Alasan Membutuhkan Bantuan" />
                                            <Controller
                                                name="reason"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        isClearable
                                                        {...field}
                                                        id="reason-select"
                                                        instanceId="reason-select"
                                                        styles={{
                                                            control: (base) => ({
                                                                ...base,
                                                                "[type='text']:focus": {
                                                                    boxShadow: "none"
                                                                }
                                                            })
                                                        }}
                                                        placeholder="Ketikan alasan nya disini, atau pilih pilihan di bawah ini"
                                                        options={options}
                                                    />
                                                )}
                                            />
                                            {errors.reason && (
                                                <small className="text-red-500">{errors.reason.value?.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="img_ktp" value="Foto KTP" />
                                            <input type="file" {...register("img_ktp")} className="pt-1 w-full focus:outline-none" />
                                            {errors.img_ktp && errors.img_ktp.message && (
                                                <small className="text-red-500">{errors.img_ktp.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <Label htmlFor="img_kk" value="Foto KK" />
                                            <input type="file" {...register("img_kk")} className="pt-1 w-full focus:outline-none" />
                                            {errors.img_kk && errors.img_kk.message && (
                                                <small className="text-red-500">{errors.img_kk.message}</small>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <div className="flex items-center">
                                                <input
                                                    id="agreement"
                                                    type="checkbox"
                                                    {...register('agreement')}
                                                    className="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded cursor-pointer"
                                                />
                                                <label htmlFor="agreement" className="ml-3 block text-sm text-gray-900 select-none cursor-pointer">
                                                    Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.
                                                </label>
                                            </div>
                                            {errors.agreement && (
                                                <small className="text-red-500">{errors.agreement.message}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                    <button type="submit" className="inline-flex justify-center items-center font-lato text-sm bg-blue text-white py-2 px-4 rounded-lg hover:ring-2 dark:hover:ring-offset-gray-700 hover:ring-offset-2 hover:ring-yellow disabled:opacity-50 ease-in-out duration-150" disabled={loading}>
                                        {loading ? "Loading ..." : "Verifikasi"}
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
