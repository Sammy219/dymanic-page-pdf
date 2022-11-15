import Header from "./Header.png"
import Footer from "./Footer.png"
import './App.css';
import moment from 'moment'

function App() {
  const message = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  const date = `20-10-2022`
  return (
    <div className="App">
    <div className="page-header" style={{textAlign: 'center'}}>
      <img id="img-header" src={Header} height="100%" width="100%"/>
    </div>

    <div className="page-footer">
      <img id="img-header" src={Footer} width="100%"/>
    </div>

    <table>

      <thead>
        <tr>
          <td>
            <div className="page-header-space"></div>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            {/* <div className="page">PAGE 1</div> */}
            {/* <div className="page">PAGE 2</div> */}
            <div className="page" style={{lineHeight: 3}}>
            <a style={{fontSize: 14}}>INTERNAL MEMO</a>
            <table style={{borderCollapse: "collapse", lineHeight: '18px', fontSize:14}}>
                    <tr>
                        <td>Nomor</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                    </tr>
                    <tr>
                        <td>Tanggal</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                    </tr>
                    <tr>
                        <td>Kepada</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: - Bp. Bernard Martian</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bp. Bernard Martian </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bp. Bernard Martian </td>
                    </tr>
                    <tr>
                        <td>Dari</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Perihal</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                    </tr>
                    {/* <tr style={{borderBottom: "2pt solid black", borderColor: "black", lineHeight: 1}}>
                        <td>&nbsp;</td>
                        <td style={{width: "100%"}}>
                        </td>
                    </tr> */}
                </table>
                    <hr color="black" width="100%"/>
                <table style={{borderCollapse: "collapse", lineHeight: '18px', fontSize:14}}>
                    <tr style={{lineHeight: 2}}>
                        <td><b>TUJUAN</b></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Mendapatkan PersetujuanSewa</td>
                    </tr>
                </table>
                <p style={{lineHeight: "16px", textAlign: "justify", marginTop: "0.5%", fontSize:14}}>
                  <b>LATAR BELAKANG</b><br/>
                  {message}
                  {message}
                  {message}
                  {message}
                  {message}
                  {message}
                  <br/>
                  Pengajuan ini disampaikan dengan pertimbangan sebagai berikut :
                    <ol type="1" style={{lineHeight: "16px", textAlign: "justify", marginTop: "1%"}}>
                      <li>Akan berakhirnya kontrak kerjasama sewa antara PT. Narindo Solusi Telekomunikasi dengan Bpk Syahrir Tauhid untuk sewa Tempat TAP Sekayu pada tanggal {moment(date).locale('id').format("LL")}.</li>
                      <li>Masih dibutuhkannya ruangan kerja untuk kantor TAP Sekayu, maka dari itu kami memohon izin untuk Pengajuan Sewa Baru Gedung TAP Sekayu</li>
                    </ol>
                </p>
                <p style={{lineHeight: "16px", textAlign: "justify", marginTop: "0%", fontSize:14}}>
                  <b>USULAN PERSETUJUAN</b><br/>
                  Berdasarkan latar belakang di atas, dengan ini kami mengajukan permohonan persetujuan management untuk pengajuan Sewa Baru Gedung TAP Sekayu selama <b>1 Tahun</b> dengan rincian sebagai berikut :
                  <table style={{marginLeft: "4%", borderCollapse: "collapse", marginBottom: "1%", textAlign: 'left', marginTop: "1%"}}>
                    <tr>
                      <td><b>1.</b></td>
                      <td><b>Lokasi Gedung</b></td>
                      <td>: </td>
                      <td>&nbsp;{}</td>
                    </tr>
                    <tr>
                        <td><b>2.</b></td>
                        <td><b>Jumlah Lantai</b></td>
                        <td>: </td>
                        <td>&nbsp;{}</td>
                    </tr>
                    <tr>
                        <td><b>3.</b></td>
                        <td><b>Daya Listrik</b></td>
                        <td>: </td>
                        <td>&nbsp;{}</td>
                    </tr>
                    <tr>
                        <td><b>4.</b></td>
                        <td><b>Periode Sewa</b></td>
                        <td>: </td>
                        <td>&nbsp;{moment(date).locale('id').format("LL")} s.d {moment(date).locale('id').format("LL")}</td>
                    </tr>
                    <tr>
                        <td><b>5.</b></td>
                        <td><b>Biaya Sewa</b></td>
                        <td>: </td>
                        <td>&nbsp;Rp 42.500.000,- / 1 Tahun (Nominal yang ditransfer ke pemilik)</td>
                    </tr>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><b>6.</b></td>
                        <td><b>Pajak 4 Ayat 2</b></td>
                        <td>: </td>
                        <td>&nbsp;Rp {}</td>
                    </tr>
                    <tr>
                        <td><b>7.</b></td>
                        <td style={{width: '150px'}}><b>Besar Beban Sewa</b></td>
                        <td>: </td>
                        <td>&nbsp;Rp 46.750.000,- / 1 Tahun </td>
                    </tr>
                    <tr>
                        <td><b>8.</b></td>
                        <td><b>Pembayaran</b></td>
                        <td>: </td>
                        <td>&nbsp;{} ke Rek {} dengan </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>&nbsp;No. Rek {} a.n {}</td>
                    </tr>
                    <tr>
                        <td><b>9.</b></td>
                        <td><b>Batas Waktu</b></td>
                        <td>: </td>
                        <td>&nbsp;{}</td>
                    </tr>
                    <tr>
                        <td><b>10.</b></td>
                        <td><b>Alasan</b></td>
                        <td>: </td>
                        <td>&nbsp;31 Oktober 2022</td>
                    </tr>
                  </table>
                  Demikian permohonan ini kami sampaikan, dan atas persetujuan yang diberikan kami ucapkan terima kasih.
                </p>
                <table style={{width: "100%", borderCollapse: "collapse", fontSize:14,}}>
                    <tr>
                        <th style={{fontWeight: "normal", textAlign: "left", width: "5cm"}}>Sekayu, 24 Oktober 2022</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}}>Diajukan oleh,</td>
                        <td colspan="2" style={{textAlign: "center"}}>Mengetahui,</td>
                        <td style={{textAlign: "left"}}>Disetujui oleh,</td>
                    </tr>
                    <tr>
                        <td style={{lineHeight: "2cm", }}>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><u>Arief Budiman</u></b></td>
                        <td>&nbsp;<b><u>Josephat Christian</u></b></td>
                        <td><b><u>Ridwan Syahman</u></b></td>
                        <td><b><u>Bernard Martian</u></b></td>
                    </tr>
                    <tr>
                        <td style={{width: "30%"}}><b>GM Regional SBP</b></td>
                        <td>&nbsp;<b>Director Of Sales</b></td>
                        <td><b>Chief Of Finance</b></td>
                        <td><b>Chief Of Executive</b></td>
                    </tr>
                </table>
              {/* {message} */}
            </div>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>
            <div className="page-footer-space"></div>
          </td>
        </tr>
      </tfoot>

    </table>
    </div>
  );
}

export default App;
