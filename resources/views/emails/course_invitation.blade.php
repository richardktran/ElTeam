<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
    <!-- Web Font / @font-face : BEGIN -->
    <!--[if mso]>
        <style>
            * {
                font-family: 'Roboto', sans-serif !important;
            }
        </style>
    <![endif]-->

    <!--[if !mso]>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
    <![endif]-->

    <!-- Web Font / @font-face : END -->

    <!-- CSS Reset : BEGIN -->


    <style>
        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            font-family: 'Roboto', sans-serif !important;
            font-size: 14px;
            margin-bottom: 10px;
            line-height: 24px;
            color: #8094ae;
            font-weight: 400;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        table table table {
            table-layout: auto;
        }

        a {
            text-decoration: none;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }
    </style>

</head>

<body width="100%"
    style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f6fa;">
    <center style="width: 100%; background-color: #f5f6fa;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
            <tr>
                <td style="padding: 40px 0;">
                    <table style="width:100%;max-width:620px;margin:0 auto;">
                        <tbody>
                            <tr>
                                <td style="text-align: center; padding-bottom:25px">
                                    <a href="#">
                                        <img style="height: 150px"
                                            src="https://elteam.s3.ap-southeast-1.amazonaws.com/app/elteam_logo.png"
                                            alt="logo">
                                    </a>
                                    <p style="font-size: 14px; color: #6576ff; padding-top: 12px;">
                                    H??? th???ng qu???n l?? l???p h???c tr???c tuy???n
                                </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
                        <tbody>
                            <tr>
                                <td style="padding: 30px 30px 15px 30px;">
                                    <h2 style="font-size: 18px; color: #6576ff; font-weight: 600; margin: 0;">L???i m???i
                                        tham gia l???p h???c</h2>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px 20px">
                                    <p style="margin-bottom: 10px;">Xin ch??o b???n,</p>
                                    <p style="margin-bottom: 10px;">
                                        {{ $data['owner_name'] }}
                                        (<a href="#"
                                            style="color: #6576ff; text-decoration:none;word-break: break-all;">{{ $data['owner_email'] }}</a>)
                                        ???? m???i b???n tham gia l???p h???c <strong>{{ $data['course_name'] }}<strong>.
                                    </p>
                                    <p style="margin-bottom: 25px;">????? tham gia l???p h???c, h??y nh???n v??o ????y:</p>
                                    <a href="{{ $data['course_url'] }}"
                                        style="background-color:#6576ff;border-radius:4px;color:#ffffff;display:inline-block;font-size:13px;font-weight:600;line-height:44px;text-align:center;text-decoration:none;text-transform: uppercase; padding: 0 30px">V??o
                                        l???p h???c</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px">
                                    <h4
                                        style="font-size: 15px; color: #000000; font-weight: 600; margin: 0; text-transform: uppercase; margin-bottom: 10px">
                                        ho???c</h4>
                                    <p style="margin-bottom: 10px;">N???u n??t tr??n kh??ng ho???t ?????ng, h??y d??n li??n k???t n??y
                                        v??o tr??nh duy???t web c???a b???n:</p>
                                    <a href="#"
                                        style="color: #6576ff; text-decoration:none;word-break: break-all;">{{ $data['course_url'] }}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 30px 40px">
                                    <p>N???u b???n kh??ng mu???n tham gia l???p h???c, vui l??ng b??? qua th??ng b??o n??y</p>
                                    <p style="margin: 0; font-size: 13px; line-height: 22px; color:#9ea8bb;">????y l?? m???t
                                        email ???????c t???o t??? ?????ng, vui l??ng kh??ng tr??? l???i email n??y. N???u b???n g???p b???t k??? v???n
                                        ????? n??o, vui l??ng li??n h??? v???i ch??ng t??i theo ?????a ch???: elteam@richardktran.dev</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width:100%;max-width:620px;margin:0 auto;">
                        <tbody>
                            <tr>
                                <td style="text-align: center; padding:25px 20px 0;">
                                    <p style="font-size: 13px;">Copyright ?? 2022 Elteam Inc. All rights reserved</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>

</html>
