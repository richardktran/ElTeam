<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToCollection;

class UsersImport implements ToCollection
{
    private array $emails = [];
    public function collection(Collection $rows)
    {
        // Loop through the rows to find the row with the header row and get the column index for the email column
        $emailColumnIndex = null;
        $emailRowIndex = null;
        foreach ($rows as $rowIndex => $row) {
            if ($row->contains('Email') || $row->contains('email')) {
                $emailColumnIndex = $row->search('Email') ?? $row->search('email');
                $emailRowIndex = $rowIndex;
                break;
            }
        }
        
        // Loop through the rows again to get the email addresses
        $emails = [];
        foreach ($rows as $rowIndex => $row) {
            if ($rowIndex > $emailRowIndex) {
                $email = $row[$emailColumnIndex];
                if ($email) {
                    $emails[] = $email;
                }
            }
        }
        $this->emails = [...$emails];
    }

    public function getEmails(): array
    {
        return $this->emails;
    }
}
