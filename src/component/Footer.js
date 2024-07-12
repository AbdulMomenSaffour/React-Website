import React from 'react'
import Footer_icon from '../asstes/images/Footer_icon.png';

export default function Footer() {
  return (
    <div className='footer container'>

    <div className='row'>

        <div className='col-3'>
            <p className='links-title'>Plantea</p>
            <div className='footer-links'>

                <a href='#'>Tentang Plantea</a>
                <a href='#'>Hak Cipta</a>
                <a href='#'>Blog dan Artikel</a>
                <a href='#'>Program Mitra</a>
                <a href='#'>Karir di Plantea</a>
                <a href='#'>Toko Mitra</a>
                <a href='#'>Program Pengabdian Masyarakat</a>
                <a href='#'>Bantuan</a>
                <a href='#'>Customer Services</a>

            </div>
        </div>

        <div className='col-3'>
            <p className='links-title'>Seller</p>
            <div className='footer-links'>

                <a href='#'>Menjadi Penjual</a>
                <a href='#'>Edukasi Seller</a>
                <a href='#'>Ajukan Verified Store</a>

            </div>

            <p className='links-title custom-links-title'>Pengguna</p>
            <div className='footer-links'>

                <a href='#'>Top Up Plantcoin</a>
                <a href='#'>Plantea COD</a>
                <a href='#'>Syarat dan Ketentuan</a>
                <a href='#'>Panduan Pengguna</a>
                <a href='#'>Affiliate Program</a>

            </div>
        </div>

        <div className='col-2'>
            <p className='links-title'>Ikuti Kami</p>

            <div className='footer-links'>

                <a href='#'>Tentang Plantea</a>
                <a href='#'>Hak Cipta</a>
                <a href='#'>Blog dan Artikel</a>
                <a href='#'>Program Mitra</a>

            </div>

        </div>

        <div className='col-4'>
            <img src={Footer_icon} className='footer-img'/>
        </div>


    </div>





    </div>
  )
}
